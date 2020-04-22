import { useCallback, DragEventHandler } from 'react';
import { CUSTOM_DROP_TYPE, EffectAllowed } from '../constants';
import { CustomItemData } from '../types';

export const useHandleDragStart = ({
  effectAllowed,
  size,
  value,
}: {
  effectAllowed: EffectAllowed;
  size: CustomItemData['size'];
  value: number;
}) =>
  useCallback<DragEventHandler>(
    e => {
      e.dataTransfer.setData(CUSTOM_DROP_TYPE, JSON.stringify({ size, value }));
      e.dataTransfer.effectAllowed = effectAllowed;
    },
    [effectAllowed, size, value],
  );
