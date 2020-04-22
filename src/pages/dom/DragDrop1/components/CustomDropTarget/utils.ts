import { useCallback, DragEventHandler, useState } from 'react';
import { DropEffect } from '../constants';

export const useCustomDropTarget = ({
  dropEffect,
  dropType,
  onDrop,
}: {
  dropEffect: DropEffect;
  dropType: string;
  onDrop: (dataText: string) => void;
}) => {
  const [receivingDrag, setReceivingDrag] = useState(false);

  const handleDragLeave = useCallback(() => setReceivingDrag(false), []);

  const handleDragOver = useCallback<DragEventHandler>(
    e => {
      if (
        Array.from(e.dataTransfer.items).some(
          ({ kind, type }) => kind === 'string' && type === dropType,
        )
      ) {
        e.dataTransfer.dropEffect = dropEffect;
        e.preventDefault();
        setReceivingDrag(true);
      }
    },
    [dropEffect, dropType],
  );

  const handleDrop = useCallback<DragEventHandler>(
    e => {
      const dataText = e.dataTransfer.getData(dropType);
      onDrop(dataText);
      setReceivingDrag(false);
    },
    [dropType, onDrop],
  );

  return {
    handleDragLeave,
    handleDragOver,
    handleDrop,
    receivingDrag,
  };
};
