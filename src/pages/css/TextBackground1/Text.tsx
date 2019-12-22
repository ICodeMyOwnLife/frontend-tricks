import React, { FC, memo } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';

export const TextImpl: FC<TextProps> = ({ className }) => (
  <div className={clsx(classes.Text, className)}>THIS IS TEXT</div>
);

const Text = memo(TextImpl);
Text.displayName = 'Text';
export default Text;

export interface TextProps {
  className?: string;
}
