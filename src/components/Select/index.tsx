import React, { FC, memo } from 'react';
import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@material-ui/core';
import { FormContextValues } from 'react-hook-form';
import { useSelect } from './utils';

export const SelectComponent: FC<SelectProps> = ({
  defaultValue,
  form,
  name,
  ...props
}) => {
  const { handleChange, value } = useSelect({ defaultValue, form, name });
  console.log(value);
  return (
    <MuiSelect
      defaultValue={defaultValue}
      onChange={handleChange}
      value={value}
      {...props}
    />
  );
};

const Select = memo(SelectComponent);
Select.displayName = 'Select';
export default Select;

export interface SelectProps
  extends OmitFrom<MuiSelectProps, 'defaultValue' | 'onChange' | 'value'> {
  defaultValue?: string;
  form: FormContextValues;
  name: string;
}
