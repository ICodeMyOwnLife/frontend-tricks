import React, { FC, memo } from 'react';
import classnames from 'classnames';
import classes from './styles.module.scss';

export const ShapeImpl: FC<ShapeProps> = ({ name, className }) => (
  <div className={classes.ShapeContainer}>
    <h4 className={classes.Title}>{name}</h4>
    <div className={classnames(classes.Shape, className)} />
  </div>
);

const Shape = memo(ShapeImpl);
Shape.displayName = 'Shape';
export default Shape;

export interface ShapeProps {
  name: string;
  className?: string;
}
