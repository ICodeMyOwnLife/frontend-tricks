import React, {
  memo,
  ReactElement,
  ComponentType,
  ElementType,
  ComponentProps,
  ReactNode,
} from 'react';
import { FormContextValues, FieldError } from 'react-hook-form';
import { InputLabel } from '@material-ui/core';
import InputControlLayout from 'components/InputControlLayout';

export function InputControlComponent<
  TName extends string,
  TFormData extends Partial<Record<TName, unknown>>,
  TElement extends ElementType
>(props: InputControlProps<TName, TFormData, TElement>): ReactElement | null {
  const {
    children,
    className,
    component: Component,
    componentChildren,
    error,
    errorMessage,
    form,
    fullWidth = true,
    id,
    label,
    name,
    ...rest
  } = props as InputControlOwnProps<TName, TFormData, TElement>;
  const componentProps = {
    ...rest,
    children: componentChildren,
    form,
    id,
    name,
  } as ComponentProps<TElement>;

  return (
    <InputControlLayout
      className={className}
      error={error}
      errorMessage={errorMessage}
      form={form}
      name={name}
      fullWidth={fullWidth}
    >
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <Component {...componentProps} />
      {children}
    </InputControlLayout>
  );
}

const InputControl = memo(
  InputControlComponent,
) as typeof InputControlComponent & ComponentType<any>;
InputControl.displayName = 'InputControl';
export default InputControl;

interface InputControlOwnProps<
  TName extends string,
  TFormData extends Partial<Record<TName, unknown>>,
  TElement extends ElementType
> {
  children?: ReactNode;
  className?: string;
  component: TElement;
  componentChildren?: ReactNode;
  error?: FieldError;
  errorMessage?: ReactNode;
  form: FormContextValues<TFormData>;
  fullWidth?: boolean;
  id?: string;
  label?: ReactNode;
  name: TName;
}

export type InputControlProps<
  TName extends string,
  TFormData extends Partial<Record<TName, unknown>>,
  TElement extends ElementType
> = InputControlOwnProps<TName, TFormData, TElement> &
  Omit<
    ComponentProps<TElement>,
    keyof InputControlOwnProps<TName, TFormData, TElement>
  >;
