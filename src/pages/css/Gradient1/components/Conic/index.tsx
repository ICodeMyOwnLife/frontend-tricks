import React, { FC, memo } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export const ConicComponent: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={clsx(classes.circle, classes.conic1)} />
      <div className={clsx(classes.circle, classes.conic2)} />
      <div className={clsx(classes.circle, classes.conic3)} />
    </div>
  );
};

const Conic = memo(ConicComponent);
Conic.displayName = 'Conic';
export default Conic;
