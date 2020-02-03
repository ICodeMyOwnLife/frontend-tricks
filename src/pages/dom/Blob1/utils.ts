import { useState, useCallback } from 'react';

const readArrayBuffer = (arrayBuffer: ArrayBuffer) =>
  String.fromCharCode(...new Uint8Array(arrayBuffer));

const readStream = async (stream: ReadableStream) => {
  const reader = stream.getReader();
  let result = '';

  // eslint-disable-next-line no-constant-condition
  while (true) {
    // eslint-disable-next-line no-await-in-loop
    const { done, value } = await reader.read();
    const text = String.fromCharCode(...new Uint8Array(value));
    result += text;
    if (done) break;
  }

  return result;
};

export const readBlobArrayBuffer = (blob: Blob) =>
  blob.arrayBuffer().then(readArrayBuffer);

export const readBlobStream = (blob: Blob) => readStream(blob.stream());

export const readBlobText = (blob: Blob) => blob.text();

export const readResponseArrayBuffer = (blob: Blob) =>
  new Response(blob).arrayBuffer().then(readArrayBuffer);

export const readResponseStream = (blob: Blob) =>
  readStream(new Response(blob).body!);

export const readResponseText = (blob: Blob) => new Response(blob).text();

export const useHandleFileChange = ({
  onBlobChange,
}: {
  onBlobChange: (blob: Blob) => Promise<string>;
}) => {
  const [text, setText] = useState('');

  const handleFileChange = useCallback(
    async (files: FileList | null) => {
      const blob = files?.[0];
      if (blob) {
        const newText = await onBlobChange(blob);
        setText(newText);
      }
    },
    [onBlobChange],
  );

  return { text, handleFileChange };
};
