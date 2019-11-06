import { useState, useCallback, ChangeEvent } from 'react';

const useTextField = (initialValue: UseStateInitialValue<string> = '') => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback(
    (e: ChangeEvent<{ value: unknown }>) =>
      setValue(String(e.currentTarget.value)),
    [],
  );
  return [value, handleChange, setValue] as const;
};

export default useTextField;
