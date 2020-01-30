import { FormContextValues } from 'react-hook-form';
import { useState } from 'react';

export const useHandleSubmit = <TFormData>({
  form: { handleSubmit },
  onSubmit,
}: {
  form: FormContextValues<TFormData>;
  onSubmit: OnSubmit<TFormData>;
}) => {
  const [result, setResult] = useState<unknown>();
  const handleSubmitForm = handleSubmit(data => {
    const newResult = onSubmit(data);
    return setResult(newResult);
  });
  return { result, handleSubmitForm };
};

export type OnSubmit<TFormData> = (data: TFormData) => unknown;
