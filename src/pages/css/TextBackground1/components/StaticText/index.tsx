import React, { FC, memo } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export const StaticTextComponent: FC<StaticTextProps> = ({
  children = 'STATIC TEXT',
  variant,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={clsx(classes.text, classes[variant])}>{children}</span>
    </div>
  );
};

const StaticText = memo(StaticTextComponent);
StaticText.displayName = 'StaticText';
export default StaticText;

export interface StaticTextProps {
  children?: string;
  variant: 'linear' | 'radial' | 'conic' | 'image';
}
