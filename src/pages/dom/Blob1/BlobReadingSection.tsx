import React, { FC, memo } from 'react';
import { Input } from '@material-ui/core';
import Section, { SectionProps } from 'components/Section';
import { ButtonFileInput } from 'components/FileInput';
import { FileInputProps } from 'components/FileInput/types';
import { useHandleFileChange } from './utils';
import useStyles from './styles';

export const BlobReadingSectionComponent: FC<BlobReadingSectionProps> = ({
  id,
  onBlobChange,
  ...props
}) => {
  const classes = useStyles();
  const { handleFileChange, text } = useHandleFileChange({ onBlobChange });
  const rows = text.split('\n').length + 1;

  return (
    <Section {...props}>
      <ButtonFileInput id={id} onChange={handleFileChange} />
      {text && (
        <Input
          classes={{ input: classes.textarea }}
          className={classes.result}
          fullWidth
          multiline
          rows={rows}
          rowsMax={8}
          value={text}
        />
      )}
    </Section>
  );
};

const BlobReadingSection = memo(BlobReadingSectionComponent);
BlobReadingSection.displayName = 'BlobReadingSection';
export default BlobReadingSection;

export interface BlobReadingSectionProps
  extends OmitFrom<SectionProps, 'children'>,
    PickFrom<FileInputProps, 'id'> {
  onBlobChange: (blob: Blob) => Promise<string>;
}
