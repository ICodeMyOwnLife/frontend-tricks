import React, { FC, memo } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export const LinearComponent: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={clsx(classes.rectangle, classes.linear1)} />
      <div className={clsx(classes.rectangle, classes.linear2)} />
      <div className={clsx(classes.rectangle, classes.linear3)} />
      <div className={clsx(classes.rectangle, classes.linear4)} />
      <div className={clsx(classes.rectangle, classes.linear5)} />
      <div className={clsx(classes.rectangle, classes.linear6)} />
      <div className={clsx(classes.rectangle, classes.linear7)} />
    </div>
  );
};

const Linear = memo(LinearComponent);
Linear.displayName = 'Linear';
export default Linear;
