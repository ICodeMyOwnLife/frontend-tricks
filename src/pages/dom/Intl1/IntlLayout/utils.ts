import { FormContextValues } from 'react-hook-form';
import { useState } from 'react';

export const useHandleSubmit = <TFormData>({
  form: { handleSubmit },
  onSubmit,
}: {
  form: FormContextValues<TFormData>;
  onSubmit: OnSubmit<TFormData>;
}) => {
  const [result, setResult] = useState('');
  const handleSubmitForm = handleSubmit(data => {
    const newResult = onSubmit(data);
    console.log(data, newResult);
    return setResult(newResult);
  });
  return { result, handleSubmitForm };
};

export type OnSubmit<TFormData> = (data: TFormData) => string;
