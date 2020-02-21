/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-alert */
import { useState, useCallback } from 'react';

export const useHandleCopy = ({ src }: { src: string }) =>
  useCallback(async () => {
    const res = await fetch(src);
    const blob = await res.blob();
    try {
      const item = new ClipboardItem({ [blob.type]: blob });
      await navigator.clipboard.write([item]);
      alert('Copied to clipboard');
    } catch (error) {
      alert(error.message);
    }
  }, [src]);

export const useHandlePaste = () => {
  const [url, setUrl] = useState('');
  const handlePaste = useCallback(async () => {
    setUrl('');
    try {
      const items = await navigator.clipboard.read();
      let blob: Blob | undefined;
      for (const item of items) {
        for (const type of item.types) {
          if (type.startsWith('image')) {
            blob = await item.getType(type);
            break;
          }
        }
      }
      if (blob) {
        setUrl(URL.createObjectURL(blob));
      }
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return { handlePaste, url };
};
