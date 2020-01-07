import { useEffect, useCallback, ChangeEventHandler } from 'react';
import { FormContextValues, ValidationOptions } from 'react-hook-form';

export const useSelect = ({
  defaultValue,
  form: { register, setValue, watch },
  name,
  validationOptions,
}: {
  defaultValue: string | undefined;
  form: FormContextValues;
  name: string;
  validationOptions: ValidationOptions | undefined;
}) => {
  const handleChange = useCallback<ChangeEventHandler<{ value: unknown }>>(
    ({ target: { value } }) => setValue(name, value),
    [name, setValue],
  );

  useEffect(() => {
    register(name, validationOptions);
  }, [name, register, validationOptions]);

  useEffect(() => {
    setValue(name, defaultValue);
  }, [defaultValue, name, setValue]);

  return { value: watch(name, ''), handleChange };
};
