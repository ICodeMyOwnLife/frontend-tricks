import React, { FC, memo } from 'react';
import Communication from '../Communication';
import { useBroadcastChannel } from './utils';

export const BroadcastChannelComponent: FC = () => {
  const { communicationMessage, sendMessage } = useBroadcastChannel();
  return (
    <Communication
      communicationMessage={communicationMessage}
      sendMessage={sendMessage}
    />
  );
};

const BroadcastChannel = memo(BroadcastChannelComponent);
BroadcastChannel.displayName = 'BroadcastChannel';
export default BroadcastChannel;
