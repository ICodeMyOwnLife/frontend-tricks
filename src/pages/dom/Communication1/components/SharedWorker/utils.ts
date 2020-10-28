import { useCallback, useEffect, useRef, useState } from 'react';

export const useSharedWorker = () => {
  const [communicationMessage, setCommunicationMessage] = useState('');
  const workerRef = useRef<SharedWorker>();

  const sendMessage = useCallback(
    (message: string) => workerRef.current?.port.postMessage(message),
    [],
  );

  useEffect(() => {
    const worker = new SharedWorker(
      '/workers/dom/Communication1/communicationWorker.js',
      { type: 'module' },
    );
    worker.port.addEventListener('message', ({ data }) =>
      setCommunicationMessage(data),
    );
    worker.port.start();
    workerRef.current = worker;
    return () => worker.port.close();
  }, []);

  return { communicationMessage, sendMessage };
};
