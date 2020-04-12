import React, { FC, memo } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export const PlayStateComponent: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        className={clsx(
          classes.circle,
          classes.fan,
          classes.animation,
          classes.animation1,
        )}
      />
    </div>
  );
};

const PlayState = memo(PlayStateComponent);
PlayState.displayName = 'PlayState';
export default PlayState;
