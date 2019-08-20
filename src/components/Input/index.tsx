/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo, InputHTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';
import classes from './styles.module.scss';

export const InputImpl: FC<InputProps> = ({
  className,
  labelClassName,
  inputClassName,
  id,
  label,
  ...props
}) => (
  <div className={classnames(classes.InputGroup, className)}>
    <label className={classnames(classes.Label, labelClassName)} htmlFor={id}>
      {label}
    </label>
    <input
      className={classnames(classes.Input, inputClassName)}
      id={id}
      {...props}
    />
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
