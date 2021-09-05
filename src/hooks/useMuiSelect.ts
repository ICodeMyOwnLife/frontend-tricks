import { useState, useCallback, ChangeEvent } from 'react';
import { ValueFactory } from 'cb-toolset/function';

const useMuiSelect = <TValue extends string = string>(
  initialValue: ValueFactory<TValue> = '' as TValue,
) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback(
    (e: ChangeEvent<{ value: unknown }>) =>
      setValue(String(e.target.value) as TValue),
    [],
  );
  return [value, setValue, handleChange] as const;
};

export default useMuiSelect;
