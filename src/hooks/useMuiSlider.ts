import { useState, useCallback, ChangeEvent } from 'react';
import { ValueFactory } from 'cb-toolset/function';

const useMuiSlider = <TValue extends number | number[]>(
  initialValue: ValueFactory<TValue>,
) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback(
    (_: ChangeEvent<{}>, newValue: number | number[]) =>
      setValue(newValue as TValue),
    [],
  );
  return [value, setValue, handleChange] as const;
};

export default useMuiSlider;
