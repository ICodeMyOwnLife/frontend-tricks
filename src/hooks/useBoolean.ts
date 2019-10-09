import { useState, useCallback } from 'react';

const useBoolean = (initialValue: UseStateInitialValue<boolean> = false) => {
  const [value, setValue] = useState(initialValue);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue(prevValue => !prevValue), []);
  return [value, setTrue, setFalse, toggle, setValue] as const;
};

export default useBoolean;
