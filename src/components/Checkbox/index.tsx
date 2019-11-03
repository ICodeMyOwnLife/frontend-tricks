/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo, ChangeEvent, useCallback } from 'react';
import clsx from 'clsx';
import { InputProps } from 'components/Input';
import classes from './styles.module.scss';

export const CheckboxImpl: FC<CheckboxProps> = ({
  className,
  labelClassName,
  inputClassName,
  id,
  label,
  onChange,
  ...props
}) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      onChange && onChange(e.target.checked),
    [onChange],
  );

  return (
    <div className={clsx(classes.InputGroup, className)}>
      <label className={clsx(classes.Label, labelClassName)} htmlFor={id}>
        <input
          className={clsx(classes.Input, inputClassName)}
          type="checkbox"
          id={id}
          onChange={handleChange}
          {...props}
        />
        {label}
      </label>
    </div>
  );
};

const Checkbox = memo(CheckboxImpl);
Checkbox.displayName = 'Checkbox';
export default Checkbox;

export interface CheckboxProps extends Omit<InputProps, 'onChange' | 'type'> {
  onChange?: (value: boolean) => void;
}
