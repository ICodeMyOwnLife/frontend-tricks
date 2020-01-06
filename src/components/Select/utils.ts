import { useEffect, useCallback, ChangeEventHandler } from 'react';
import { FormContextValues } from 'react-hook-form';

export const useSelect = ({
  defaultValue,
  form: { register, setValue, watch },
  name,
}: {
  defaultValue: string | undefined;
  form: FormContextValues;
  name: string;
}) => {
  const handleChange = useCallback<ChangeEventHandler<{ value: unknown }>>(
    ({ target: { value } }) => setValue(name, value),
    [name, setValue],
  );

  useEffect(() => {
    register(name);
  }, [name, register]);

  useEffect(() => {
    setValue(name, defaultValue);
  }, [defaultValue, name, setValue]);

  return { value: watch(name, defaultValue), handleChange };
};
