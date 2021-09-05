import { memo, ReactElement, ComponentType, ReactNode } from 'react';
import { FieldError, FormContextValues } from 'react-hook-form';
import {
  FormControl,
  FormControlProps,
  FormHelperText,
} from '@material-ui/core';

export function InputControlLayoutComponent<
  TName extends string,
  TFormData extends Partial<Record<TName, unknown>>
>({
  children,
  error,
  errorMessage,
  form,
  name,
  ...props
}: InputControlLayoutProps<TName, TFormData>): ReactElement | null {
  const inputError =
    !!form && name !== undefined ? (form.errors[name] as FieldError) : error;
  const inputErrorMessage = errorMessage || inputError?.message;

  return (
    <FormControl {...props} error={!!inputError}>
      {children}
      {inputError && <FormHelperText>{inputErrorMessage}</FormHelperText>}
    </FormControl>
  );
}

const InputControlLayout = memo(
  InputControlLayoutComponent,
) as typeof InputControlLayoutComponent & ComponentType<any>;
InputControlLayout.displayName = 'InputControlLayout';
export default InputControlLayout;

export interface InputControlLayoutProps<
  TName extends string,
  TFormData extends Partial<Record<TName, unknown>>
> extends OmitFrom<FormControlProps, 'error'> {
  error?: FieldError;
  errorMessage?: ReactNode;
  form: FormContextValues<TFormData>;
  name: TName;
}
