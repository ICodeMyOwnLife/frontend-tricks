import React, { FC, memo, useRef } from 'react';
import EventInfo from './EventInfo';
import { useOnChange } from './utils';
import useStyles from './styles';
import EventInfoContainer from './EventInfoContainer';

export const EventLoggerComponent: FC<EventLoggerProps> = ({
  eventNames,
  inputType,
}) => {
  const classes = useStyles();
  const inputRef = useRef<HTMLInputElement>(null);
  const { eventCurrentTarget, eventType, logs, handleAddLogs } = useOnChange();
  return (
    <div>
      <div>
        <input
          name={inputType}
          onChange={handleAddLogs}
          ref={inputRef}
          type={inputType}
        />
        <input name={inputType} type={inputType} />
      </div>

      <div className={classes.infos}>
        <EventInfo
          currentTarget={eventCurrentTarget}
          title={
            <span>
              React <code>onChange</code> event
            </span>
          }
          logs={logs}
          type={eventType}
        />
        {eventNames.map(eventName => (
          <EventInfoContainer
            eventName={eventName}
            inputRef={inputRef}
            key={eventName}
          />
        ))}
      </div>
    </div>
  );
};

const EventLogger = memo(EventLoggerComponent);
EventLogger.displayName = 'EventLogger';
export default EventLogger;

export interface EventLoggerProps {
  eventNames: (keyof HTMLElementEventMap)[];
  inputType: string;
}
