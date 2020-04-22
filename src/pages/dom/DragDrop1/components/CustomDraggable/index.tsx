import React, { FC, memo } from 'react';
import CustomElement, { CustomElementProps } from '../CustomElement';
import { useHandleDragStart } from './utils';
import { EffectAllowed } from '../constants';

export const CustomDraggableComponent: FC<CustomDraggableProps> = ({
  effectAllowed,
  size,
  value,
  ...props
}) => {
  const handleDragStart = useHandleDragStart({ effectAllowed, size, value });

  return (
    <CustomElement
      {...props}
      draggable
      onDragStart={handleDragStart}
      size={size}
      value={value}
    />
  );
};

const CustomDraggable = memo(CustomDraggableComponent);
CustomDraggable.displayName = 'CustomDraggable';
export default CustomDraggable;

export interface CustomDraggableProps
  extends OmitFrom<CustomElementProps, 'draggable' | 'onDragStart'> {
  effectAllowed: EffectAllowed;
}
