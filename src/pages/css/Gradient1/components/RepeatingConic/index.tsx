import React, { FC, memo } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export const RepeatingConicComponent: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={clsx(classes.circle, classes.repeatingConic1)} />
    </div>
  );
};

const RepeatingConic = memo(RepeatingConicComponent);
RepeatingConic.displayName = 'RepeatingConic';
export default RepeatingConic;
