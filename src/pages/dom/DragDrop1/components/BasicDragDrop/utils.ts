import { useState, useCallback, DragEventHandler } from 'react';
import { DragData } from '../types';

export const handleDragStart: DragEventHandler = e =>
  e.dataTransfer.setData('text/plain', e.currentTarget.outerHTML);

export const useBasicDragDrop = () => {
  const [dragData, setDragData] = useState<DragData>();
  const handleDrop = useCallback((data: DragData) => setDragData(data), []);
  return { dragData, handleDrop };
};
