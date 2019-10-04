/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo } from 'react';
import { Box } from '@material-ui/core';
import ButtonFileInput from './ButtonFileInput';
import LabelFileInput from './LabelFileInput';
import { FileInputProps } from './types';
import CommonPreview from './CommonPreview';

const getInputElement = (triggerComponent: TriggerComponent) => {
  switch (triggerComponent) {
    case 'label':
      return LabelFileInput;

    default:
      return ButtonFileInput;
  }
};

export const CommonInputComponent: FC<CommonInputProps> = ({
  title,
  triggerComponent = 'button',
  files,
  ...props
}) => {
  const InputElement = getInputElement(triggerComponent);

  return (
    <Box>
      <InputElement files={files} {...props} />
      <CommonPreview title={title} files={files} />
    </Box>
  );
};

const CommonInput = memo(CommonInputComponent);
CommonInput.displayName = 'CommonInput';
export default CommonInput;

export interface CommonInputProps extends FileInputProps {
  title: string;
  triggerComponent?: TriggerComponent;
}

export type TriggerComponent = 'button' | 'label';
