import React, { FC, memo } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export const BackgroundTextComponent: FC<BackgroundTextProps> = ({
  children = 'THIS TEXT',
  className,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundTextContainer}>
      <span className={clsx(classes.backgroundText, className)}>
        {children}
      </span>
    </div>
  );
};

const BackgroundText = memo(BackgroundTextComponent);
BackgroundText.displayName = 'BackgroundText';
export default BackgroundText;

export interface BackgroundTextProps {
  children?: string;
  className?: string;
}
