/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo } from 'react';
import { useObjectUrl } from './hooks';
import ImagePreview from './ImagePreview';
import InputContainer from './InputContainer';
import { WrappedInputProps } from './types';

export const ObjectUrlImageInputImpl: FC<WrappedInputProps> = ({
  title,
  triggerComponent = 'button',
  files,
  supportedFileTypes,
  ...props
}) => {
  const { src, error, cleanupCallback } = useObjectUrl({
    files,
    supportedFileTypes,
  });

  return (
    <InputContainer
      triggerComponent={triggerComponent}
      files={files}
      {...props}
    >
      <ImagePreview
        title={title}
        src={src}
        error={error}
        onLoad={cleanupCallback}
      />
    </InputContainer>
  );
};

const ObjectUrlImageInput = memo(ObjectUrlImageInputImpl);
ObjectUrlImageInput.displayName = 'ObjectUrlImageInput';
export default ObjectUrlImageInput;
