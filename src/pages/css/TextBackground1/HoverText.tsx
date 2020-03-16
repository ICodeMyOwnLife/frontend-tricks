import React, { FC, memo } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export const HoverTextComponent: FC<HoverTextProps> = ({
  children = 'THIS TEXT',
  className,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.hoverTextContainer}>
      <span className={clsx(className, classes.hoverText)} data-text={children}>
        {children}
      </span>
    </div>
  );
};

const HoverText = memo(HoverTextComponent);
HoverText.displayName = 'HoverText';
export default HoverText;

export interface HoverTextProps {
  children?: string;
  className?: string;
}
