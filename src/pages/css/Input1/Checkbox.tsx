import React, { FC, memo, InputHTMLAttributes } from 'react';
import { Box } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './styles';

export const CheckboxComponent: FC<CheckboxProps> = ({
  className,
  id,
  label,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.checkInputWrapper}>
      <input
        {...props}
        className={clsx(
          className,
          classes.checkInput,
          classes.box,
          classes.checkbox,
        )}
        id={id}
        type="checkbox"
      />
      <label htmlFor={id}>{label}</label>
    </Box>
  );
};

const Checkbox = memo(CheckboxComponent);
Checkbox.displayName = 'Checkbox';
export default Checkbox;

export interface CheckboxProps
  extends OmitFrom<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id: string;
  label: string;
}
