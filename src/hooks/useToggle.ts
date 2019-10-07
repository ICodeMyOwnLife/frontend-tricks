import { useState, useCallback } from 'react';

const useToggle = (initialValue: UseStateInitialValue<boolean> = false) => {
  const [flag, setFlag] = useState(initialValue);
  const toggle = useCallback(() => setFlag(prevValue => !prevValue), []);
  return [flag, toggle, setFlag] as const;
};

export default useToggle;
