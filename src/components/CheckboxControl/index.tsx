import React, {
  memo,
  ReactElement,
  ComponentType,
  ElementType,
  ReactNode,
  ComponentProps,
} from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { FieldError, FormContextValues } from 'react-hook-form';
import InputControlLayout from 'components/InputControlLayout';

export function CheckboxControlComponent<
  TName extends string,
  TFormData extends Partial<Record<TName, unknown>>,
  TElement extends ElementType
>(
  props: CheckboxControlProps<TName, TFormData, TElement>,
): ReactElement | null {
  const {
    className,
    children,
    component: Component = Checkbox,
    error,
    errorMessage,
    form,
    fullWidth = true,
    label,
    name,
    ...rest
  } = props as CheckboxControlOwnProps<TName, TFormData, TElement>;
  const componentProps = { ...rest, form, name } as ComponentProps<TElement>;

  return (
    <InputControlLayout
      className={className}
      error={error}
      errorMessage={errorMessage}
      form={form}
      name={name}
      fullWidth={fullWidth}
    >
      <FormControlLabel
        control={<Component {...componentProps} />}
        label={label}
      />
      {children}
    </InputControlLayout>
  );
}

const CheckboxControl = memo(
  CheckboxControlComponent,
) as typeof CheckboxControlComponent & ComponentType<any>;
CheckboxControl.displayName = 'CheckboxControl';
export default CheckboxControl;

interface CheckboxControlOwnProps<
  TName extends string,
  TFormData extends Partial<Record<TName, unknown>>,
  TElement extends ElementType
> {
  children?: ReactNode;
  className?: string;
  component?: TElement;
  error?: FieldError;
  errorMessage?: ReactNode;
  form: FormContextValues<TFormData>;
  fullWidth?: boolean;
  label?: ReactNode;
  name: TName;
}

export type CheckboxControlProps<
  TName extends string,
  TFormData extends Partial<Record<TName, unknown>>,
  TElement extends ElementType
> = CheckboxControlOwnProps<TName, TFormData, TElement> &
  Omit<
    ComponentProps<TElement>,
    keyof CheckboxControlOwnProps<TName, TFormData, TElement>
  >;
