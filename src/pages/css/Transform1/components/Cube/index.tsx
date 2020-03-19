import React, { FC, memo } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export const CubeComponent: FC<CubeProps> = ({
  backfaceHidden = true,
  className,
  size = 120,
}) => {
  const classes = useStyles({ backfaceHidden, size });

  return (
    <div className={clsx(classes.root, className)}>
      <div className={clsx(classes.face, classes.face1)}>1</div>
      <div className={clsx(classes.face, classes.face2)}>2</div>
      <div className={clsx(classes.face, classes.face3)}>3</div>
      <div className={clsx(classes.face, classes.face4)}>4</div>
      <div className={clsx(classes.face, classes.face5)}>5</div>
      <div className={clsx(classes.face, classes.face6)}>6</div>
    </div>
  );
};

const Cube = memo(CubeComponent);
Cube.displayName = 'Cube';
export default Cube;

export interface CubeProps {
  backfaceHidden?: boolean;
  className?: string;
  size?: number;
}
