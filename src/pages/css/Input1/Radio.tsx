import React, { FC, memo, InputHTMLAttributes } from 'react';
import { Box } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './styles';

export const RadioComponent: FC<RadioProps> = ({
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
          classes.radio,
        )}
        id={id}
        type="radio"
      />
      <label htmlFor={id}>{label}</label>
    </Box>
  );
};

const Radio = memo(RadioComponent);
Radio.displayName = 'Radio';
export default Radio;

export interface RadioProps
  extends OmitFrom<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id: string;
  label: string;
}
