import React, { FC, memo, useCallback, DragEvent, useState } from 'react';
import classnames from 'classnames';
import classes from './styles.module.scss';

const getItemData = (item: DataTransferItem) =>
  new Promise<ItemData>(resolve => {
    const { kind, type } = item;

    if (item.kind === 'file') {
      resolve({ kind, type, dataFile: item.getAsFile()! });
    } else {
      item.getAsString(dataString => resolve({ kind, type, dataString }));
    }
  });

const getDragData = async (dataTransfer: DataTransfer) => {
  const { dropEffect, effectAllowed } = dataTransfer;

  const data = await Promise.all(
    Array.from(dataTransfer.items).map(getItemData),
  );
  const dragData: DragData = { data, dropEffect, effectAllowed };
  return dragData;
};

export const DropTargetImpl: FC<DropTargetProps> = ({ onDrop }) => {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = useCallback((e: DragEvent<Node>) => {
    e.preventDefault();
    setDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: DragEvent<Node>) => {
    e.preventDefault();
    setDragging(false);
  }, []);

  const handleDrop = useCallback(
    async (e: DragEvent<Node>) => {
      e.preventDefault();
      const data = await getDragData(e.dataTransfer);
      onDrop(data);
      setDragging(false);
    },
    [onDrop],
  );

  return (
    <div
      className={classnames(classes.DropTarget, {
        [classes.dragging]: dragging,
      })}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    />
  );
};

const DropTarget = memo(DropTargetImpl);
DropTarget.displayName = 'DropTarget';
export default DropTarget;

export interface DropTargetProps {
  onDrop: (data: DragData) => void;
}

export interface ItemData {
  type: string;
  kind: string;
  dataFile?: File;
  dataString?: string;
}

export interface DragData {
  data: ItemData[];
  dropEffect: string;
  effectAllowed: string;
}
