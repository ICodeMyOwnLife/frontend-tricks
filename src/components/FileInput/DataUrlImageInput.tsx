/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo } from 'react';
import { useDataUrl } from './hooks';
import ImagePreview from './ImagePreview';
import InputContainer from './InputContainer';
import { WrappedInputProps } from './types';

export const DataUrlImageInputImpl: FC<WrappedInputProps> = ({
  title,
  triggerComponent = 'button',
  files,
  supportedFileTypes,
  ...props
}) => {
  const { src, error } = useDataUrl({ files, supportedFileTypes });

  return (
    <InputContainer
      triggerComponent={triggerComponent}
      files={files}
      {...props}
    >
      <ImagePreview title={title} src={src} error={error} />
    </InputContainer>
  );
};

const DataUrlImageInput = memo(DataUrlImageInputImpl);
DataUrlImageInput.displayName = 'DataUrlImageInput';
export default DataUrlImageInput;
