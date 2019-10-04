/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo, ReactNode } from 'react';
import { Box } from '@material-ui/core';
import ButtonFileInput from './ButtonFileInput';
import LabelFileInput from './LabelFileInput';
import { FileInputProps, TriggerComponent } from './types';

const getInputElement = (triggerComponent: TriggerComponent) => {
  switch (triggerComponent) {
    case 'label':
      return LabelFileInput;

    default:
      return ButtonFileInput;
  }
};

export const InputContainerComponent: FC<InputContainerProps> = ({
  triggerComponent = 'button',
  children,
  ...props
}) => {
  const InputElement = getInputElement(triggerComponent);

  return (
    <Box>
      <InputElement {...props} />
      {children}
    </Box>
  );
};

const InputContainer = memo(InputContainerComponent);
InputContainer.displayName = 'InputContainer';
export default InputContainer;

export interface InputContainerProps extends FileInputProps {
  triggerComponent?: TriggerComponent;
  children?: ReactNode;
}
