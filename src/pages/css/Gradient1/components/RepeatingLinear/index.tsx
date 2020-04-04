import React, { FC, memo } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export const RepeatingLinearComponent: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={clsx(classes.rectangle, classes.repeatingLinear1)} />
    </div>
  );
};

const RepeatingLinear = memo(RepeatingLinearComponent);
RepeatingLinear.displayName = 'RepeatingLinear';
export default RepeatingLinear;
