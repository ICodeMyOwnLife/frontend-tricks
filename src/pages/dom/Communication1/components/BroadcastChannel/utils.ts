import { useCallback, useEffect, useRef, useState } from 'react';

const CHANNEL_NAME = 'COMMUNICATION_1';

export const useBroadcastChannel = () => {
  const [communicationMessage, setCommunicationMessage] = useState('');
  const broadCastChannelRef = useRef<BroadcastChannel>();

  const sendMessage = useCallback(
    (message: string) => broadCastChannelRef.current?.postMessage(message),
    [],
  );

  useEffect(() => {
    const bc = new BroadcastChannel(CHANNEL_NAME);
    broadCastChannelRef.current = bc;
    bc.addEventListener('message', e => setCommunicationMessage(e.data));
    return () => bc.close();
  }, []);

  return {
    communicationMessage,
    sendMessage,
  };
};
