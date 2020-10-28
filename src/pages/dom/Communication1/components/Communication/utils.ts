import { useCallback } from 'react';
import { useTextInput } from 'cb-hooks';

export const useCommunication = ({
  sendMessage,
}: {
  sendMessage: (message: string) => void;
}) => {
  const [message, , handleChangeMessage] = useTextInput();
  const handleClick = useCallback(() => sendMessage(message), [
    message,
    sendMessage,
  ]);

  return { handleChangeMessage, handleClick, message };
};
