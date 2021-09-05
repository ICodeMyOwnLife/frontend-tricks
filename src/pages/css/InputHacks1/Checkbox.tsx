import { FC, memo, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export const CheckboxComponent: FC<CheckboxProps> = ({
  className,
  label,
  id,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div>
      <input
        className={clsx(classes.checkbox, className)}
        type="checkbox"
        id={id}
        {...props}
      />
      <label className={classes.boxLabel} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

const Checkbox = memo(CheckboxComponent);
Checkbox.displayName = 'Checkbox';
export default Checkbox;

export interface CheckboxProps
  extends OmitFrom<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  label: string;
  id: string;
}
