import { useState, useCallback, DragEventHandler } from 'react';
import { DragData, ItemData } from '../types';

export const getDragData = async (dataTransfer: DataTransfer) => {
  const { dropEffect, effectAllowed } = dataTransfer;

  const data = await Promise.all(
    Array.from(dataTransfer.items).map(getItemData),
  );
  const dragData: DragData = { data, dropEffect, effectAllowed };
  return dragData;
};

const getItemData = (item: DataTransferItem) =>
  new Promise<ItemData>(resolve => {
    const { kind, type } = item;

    if (item.kind === 'file') {
      resolve({ kind, type, dataFile: item.getAsFile()! });
    } else {
      item.getAsString(dataString => resolve({ kind, type, dataString }));
    }
  });

export const useGeneralDropTarget = ({
  onDrop,
}: {
  onDrop: (data: DragData) => void;
}) => {
  const [receivingDrag, setReceivingDrag] = useState(false);

  const handleDragLeave = useCallback(() => setReceivingDrag(false), []);

  const handleDragOver = useCallback<DragEventHandler>(e => {
    e.preventDefault();
    setReceivingDrag(true);
  }, []);

  const handleDrop = useCallback<DragEventHandler>(
    async e => {
      e.preventDefault();
      const dragData = await getDragData(e.dataTransfer);
      onDrop(dragData);
      setReceivingDrag(false);
    },
    [onDrop],
  );

  return { handleDragLeave, handleDragOver, handleDrop, receivingDrag };
};
