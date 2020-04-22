import React, { FC, memo } from 'react';
import clsx from 'clsx';
import { useGeneralDropTarget } from './utils';
import { DragData } from '../types';
import useStyles from './styles';

export const GeneralDropTargetComponent: FC<GeneralDropTargetProps> = ({
  onDrop,
}) => {
  const classes = useStyles();
  const {
    handleDragLeave,
    handleDragOver,
    handleDrop,
    receivingDrag,
  } = useGeneralDropTarget({ onDrop });

  return (
    <div
      className={clsx(classes.root, {
        [classes.receivingDrag]: receivingDrag,
      })}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h4 className={classes.title}>DRAG AND DROP HERE</h4>
      <p className={classes.subtitle}>
        Receives everything (text, link, image, file, ...)
      </p>
    </div>
  );
};

const GeneralDropTarget = memo(GeneralDropTargetComponent);
GeneralDropTarget.displayName = 'GeneralDropTarget';
export default GeneralDropTarget;

export interface GeneralDropTargetProps {
  onDrop: (data: DragData) => void;
}
