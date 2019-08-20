/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo } from 'react';
import { LabelFileInput, ObjectUrlImagePreview } from '.';
import { ImageInputProps } from './types';

export const ObjectUrlImageInputImpl: FC<ImageInputProps> = ({
  supportedFileTypes,
  files,
  ...props
}) => (
  <div>
    <LabelFileInput files={files} {...props} />
    <ObjectUrlImagePreview
      files={files}
      supportedFileTypes={supportedFileTypes}
    />
  </div>
);

const ObjectUrlImageInput = memo(ObjectUrlImageInputImpl);
ObjectUrlImageInput.displayName = 'ObjectUrlImageInput';
export default ObjectUrlImageInput;
