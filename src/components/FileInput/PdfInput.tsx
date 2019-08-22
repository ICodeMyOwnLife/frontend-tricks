/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo } from 'react';
import { ButtonFileInput, PdfPreview } from '.';
import { FileInputProps } from './types';

export const PdfInputImpl: FC<FileInputProps> = ({ files, ...props }) => (
  <div>
    <ButtonFileInput files={files} {...props} />
    <PdfPreview files={files} />
  </div>
);

const PdfInput = memo(PdfInputImpl);
PdfInput.displayName = 'PdfInput';
export default PdfInput;
