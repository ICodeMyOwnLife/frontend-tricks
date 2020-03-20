import React, { FC, memo } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export const HoverTextComponent: FC<HoverTextProps> = ({
  children = 'HOVER TEXT',
  variant,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span
        className={clsx(classes.text, classes[variant])}
        data-text={children}
      >
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
  variant: 'horizontal' | 'vertical' | 'diagonal';
}
