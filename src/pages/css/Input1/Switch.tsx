import React, { FC, memo, InputHTMLAttributes } from 'react';
import { Box } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './styles';

export const SwitchComponent: FC<SwitchProps> = ({
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
        className={clsx(className, classes.checkInput, classes.switch)}
        id={id}
        type="checkbox"
      />
      <label htmlFor={id}>{label}</label>
    </Box>
  );
};

const Switch = memo(SwitchComponent);
Switch.displayName = 'Switch';
export default Switch;

export interface SwitchProps
  extends OmitFrom<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id: string;
  label: string;
}
