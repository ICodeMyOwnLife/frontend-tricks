import { useCallback } from 'react';
import { useArray } from 'cb-hooks';
import { CustomItemData } from '../types';

export const useCustomDrop = () => {
  const [items, , prepend] = useArray<CustomItemData>([]);

  const handleDrop = useCallback(
    (dataText: string) => {
      const customData = JSON.parse(dataText) as CustomItemData;
      prepend(customData);
    },
    [prepend],
  );

  return { handleDrop, items };
};
