import { FC, memo } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export const RadialComponent: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={clsx(classes.circle, classes.radial1)} />
      <div className={clsx(classes.ellipse, classes.radial2)} />
      <div className={clsx(classes.circle, classes.radial3)} />
      <div className={clsx(classes.circle, classes.radial4)} />
    </div>
  );
};

const Radial = memo(RadialComponent);
Radial.displayName = 'Radial';
export default Radial;
