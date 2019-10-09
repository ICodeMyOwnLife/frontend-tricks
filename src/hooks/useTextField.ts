import { useState, ChangeEvent, useCallback } from 'react';

const useTextField = (initialValue: UseStateInitialValue<string> = '') => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    [],
  );
  return [value, handleChange, setValue] as const;
};

export default useTextField;
