/* eslint-disable react/no-array-index-key */
import React, { FC, memo } from 'react';
import clsx from 'clsx';
import { useCustomDropTarget } from './utils';
import { DropEffect } from '../constants';
import useStyles from './styles';

export const CustomDropTargetComponent: FC<CustomDropTargetProps> = ({
  dropEffect,
  dropType,
  onDrop,
}) => {
  const classes = useStyles();
  const {
    handleDragLeave,
    handleDragOver,
    handleDrop,
    receivingDrag,
  } = useCustomDropTarget({ dropEffect, dropType, onDrop });

  return (
    <div
      className={clsx(classes.root, { [classes.receivingDrag]: receivingDrag })}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      Drop Effect: {dropEffect}
    </div>
  );
};

const CustomDropTarget = memo(CustomDropTargetComponent);
CustomDropTarget.displayName = 'CustomDropTarget';
export default CustomDropTarget;

export interface CustomDropTargetProps {
  dropEffect: DropEffect;
  dropType: string;
  onDrop: (dataText: string) => void;
}
