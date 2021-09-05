import { FC, memo } from 'react';
import { Input, Button } from '@material-ui/core';
import Section from 'components/Section';
import { useHandlePaste } from './utils';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import useStyles from './styles';
import ImageShow from './ImageShow';

const imageSources = [
  { name: 'Image 1', src: img1 },
  { name: 'Image 2', src: img2 },
  { name: 'Image 3', src: img3 },
];

export const ImageSectionComponent: FC<ImageSectionProps> = () => {
  const classes = useStyles();
  const { handlePaste, url } = useHandlePaste();

  return (
    <Section title="Copy Image">
      {imageSources.map(({ name, src }) => (
        <ImageShow alt={name} key={src} src={src} />
      ))}
      <Input
        className={classes.pasteInput}
        fullWidth
        onPaste={handlePaste}
        readOnly
        value="(Paste Here)"
      />
      <Button
        className={classes.pasteButton}
        color="primary"
        onClick={handlePaste}
        variant="contained"
      >
        Paste Image
      </Button>
      {url && <img alt="clipboard" className={classes.pastedImage} src={url} />}
    </Section>
  );
};

const ImageSection = memo(ImageSectionComponent);
ImageSection.displayName = 'ImageSection';
export default ImageSection;

export interface ImageSectionProps {}
