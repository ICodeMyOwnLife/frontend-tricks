import React, { FC, memo } from 'react';
import Communication from '../Communication';
import { useSharedWorker } from './utils';

export const SharedWorkerComponent: FC = () => {
  const { communicationMessage, sendMessage } = useSharedWorker();
  return (
    <Communication
      communicationMessage={communicationMessage}
      sendMessage={sendMessage}
    />
  );
};

const SharedWorker = memo(SharedWorkerComponent);
SharedWorker.displayName = 'SharedWorker';
export default SharedWorker;
