import React, { FC, memo, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export const RadioButtonComponent: FC<RadioButtonProps> = ({
  className,
  label,
  id,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div>
      <input
        className={clsx(classes.radio, className)}
        type="radio"
        id={id}
        {...props}
      />
      <label className={classes.boxLabel} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

const RadioButton = memo(RadioButtonComponent);
RadioButton.displayName = 'RadioButton';
export default RadioButton;

export interface RadioButtonProps
  extends OmitFrom<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  label: string;
  id: string;
}
