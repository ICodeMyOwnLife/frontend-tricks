import React, { FC, memo, InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';

export const InputImpl: FC<InputProps> = ({
  className,
  labelClassName,
  inputClassName,
  id,
  label,
  ...props
}) => (
  <div className={clsx(classes.InputGroup, className)}>
    <label className={clsx(classes.Label, labelClassName)} htmlFor={id}>
      {label}
    </label>
    <input className={clsx(classes.Input, inputClassName)} id={id} {...props} />
  </div>
);

const Input = memo(InputImpl);
Input.displayName = 'Input';
export default Input;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelClassName?: string;
  inputClassName?: string;
  label: ReactNode;
}
