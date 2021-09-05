import { FC, memo } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export const RepeatingRadialComponent: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={clsx(classes.circle, classes.repeatingRadial1)} />
    </div>
  );
};

const RepeatingRadial = memo(RepeatingRadialComponent);
RepeatingRadial.displayName = 'RepeatingRadial';
export default RepeatingRadial;
