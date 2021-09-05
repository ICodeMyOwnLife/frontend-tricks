import { FC, memo } from 'react';
import {
  FormControl,
  InputLabel,
  SelectProps,
  Select,
  MenuItem,
} from '@material-ui/core';

const renderOption = (opt: string | NameValueOption) => {
  let name: string;
  let value: string;

  if (typeof opt === 'string') {
    name = opt;
    value = opt;
  } else {
    ({ name, value } = opt);
  }

  return (
    <MenuItem key={value} value={value}>
      {name}
    </MenuItem>
  );
};

export const SelectFormControlComponent: FC<SelectFormControlProps> = ({
  id,
  label,
  options,
  ...props
}) => (
  <FormControl>
    <InputLabel htmlFor={id}>{label}</InputLabel>
    <Select {...props} id={id}>
      <MenuItem value="">(no value)</MenuItem>
      {options.map(renderOption)}
    </Select>
  </FormControl>
);

const SelectFormControl = memo(SelectFormControlComponent);
SelectFormControl.displayName = 'SelectFormControl';
export default SelectFormControl;

export interface SelectFormControlProps
  extends OmitFrom<SelectProps, 'children'> {
  label: string;
  options: readonly (string | NameValueOption)[];
}

export interface NameValueOption {
  name: string;
  value: string;
}
