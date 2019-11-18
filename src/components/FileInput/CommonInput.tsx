import React, { FC, memo } from 'react';
import { useObjectUrl } from './hooks';
import CommonPreview from './CommonPreview';
import InputContainer from './InputContainer';
import { WrappedInputProps } from './types';

export const CommonInputComponent: FC<WrappedInputProps> = ({
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
      <CommonPreview
        title={title}
        src={src}
        error={error}
        onLoad={cleanupCallback}
      />
    </InputContainer>
  );
};

const CommonInput = memo(CommonInputComponent);
CommonInput.displayName = 'CommonInput';
export default CommonInput;
