import React from 'react';
import CodeViewer from 'components/CodeViewer';
import { QuestionInfo } from 'types/app-common';

const questions: QuestionInfo[] = [
  {
    question: `How to copy image to clipboard?`,
    answer: (
      <div>
        <p>
          Use <code>navigator.clipboard.write()</code>
        </p>
        <CodeViewer language="tsx">
          {`export const useHandleCopy = ({ src }: { src: string }) =>
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
  }, [src]);`}
        </CodeViewer>
      </div>
    ),
  },
  {
    question: `How to get image from clipboard?`,
    answer: (
      <div>
        <p>
          Use <code>navigator.clipboard.read</code>
        </p>
        <CodeViewer language="tsx">
          {`export const useHandlePaste = () => {
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
};`}
        </CodeViewer>
      </div>
    ),
  },
];

export default questions;
