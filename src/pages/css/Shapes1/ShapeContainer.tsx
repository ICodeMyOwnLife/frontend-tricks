import React, { FC, memo } from 'react';
import Shape, { ShapeType } from './Shape';
import classes from './styles.module.scss';

export const ShapeContainerComponent: FC<ShapeContainerProps> = ({
  name,
  type,
}) => (
  <div className={classes.ShapeContainer}>
    <h4 className={classes.Title}>{name}</h4>
    <Shape type={type} />
  </div>
);

const ShapeContainer = memo(ShapeContainerComponent);
ShapeContainer.displayName = 'ShapeContainer';
export default ShapeContainer;

export interface ShapeContainerProps {
  name: string;
  type: ShapeType;
}
