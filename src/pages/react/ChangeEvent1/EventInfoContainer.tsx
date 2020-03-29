import React, { FC, memo, RefObject } from 'react';
import { useEventHandler } from './utils';
import EventInfo from './EventInfo';

export const EventInfoContainerComponent: FC<EventInfoContainerProps> = ({
  eventName,
  inputRef,
}) => {
  const { eventCurrentTarget, eventType, logs } = useEventHandler(
    inputRef,
    eventName,
  );

  return (
    <EventInfo
      currentTarget={eventCurrentTarget}
      logs={logs}
      title={
        <span>
          DOM <code>{eventName}</code> event
        </span>
      }
      type={eventType}
    />
  );
};

const EventInfoContainer = memo(EventInfoContainerComponent);
EventInfoContainer.displayName = 'EventInfoContainer';
export default EventInfoContainer;

export interface EventInfoContainerProps {
  inputRef: RefObject<HTMLInputElement>;
  eventName: keyof HTMLElementEventMap;
}
