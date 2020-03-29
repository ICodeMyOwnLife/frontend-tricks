import React, { FC, memo, ReactNode } from 'react';
import { Typography } from '@material-ui/core';
import { InputEventLog } from './utils';
import useStyles from './styles';

export const EventInfoComponent: FC<EventInfoProps> = ({
  currentTarget,
  logs,
  title,
  type,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h6">{title}</Typography>
      <Typography>currentTarget: {currentTarget}</Typography>
      <Typography>type: {type}</Typography>
      <pre className={classes.eventLog}>
        <code>{!!logs.length && JSON.stringify(logs, null, 2)}</code>
      </pre>
    </div>
  );
};

const EventInfo = memo(EventInfoComponent);
EventInfo.displayName = 'EventInfo';
export default EventInfo;

export interface EventInfoProps {
  currentTarget: string | undefined;
  logs: readonly InputEventLog[];
  title: ReactNode;
  type: string | undefined;
}
