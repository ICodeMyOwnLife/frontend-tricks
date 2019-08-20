/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo } from 'react';
import { ButtonFileInput, DataUrlImagePreview } from '.';
import { ImageInputProps } from './types';

export const DataUrlImageInputImpl: FC<ImageInputProps> = ({
  supportedFileTypes,
  files,
  ...props
}) => (
  <div>
    <ButtonFileInput files={files} {...props} />
    <DataUrlImagePreview
      files={files}
      supportedFileTypes={supportedFileTypes}
    />
  </div>
);

const DataUrlImageInput = memo(DataUrlImageInputImpl);
DataUrlImageInput.displayName = 'DataUrlImageInput';
export default DataUrlImageInput;
