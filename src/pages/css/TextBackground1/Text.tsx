import React, { FC, memo } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export const TextComponent: FC<TextProps> = ({ className }) => {
  const classes = useStyles();
  return <div className={clsx(classes.text, className)}>THIS IS TEXT</div>;
};

const Text = memo(TextComponent);
Text.displayName = 'Text';
export default Text;

export interface TextProps {
  className?: string;
}
