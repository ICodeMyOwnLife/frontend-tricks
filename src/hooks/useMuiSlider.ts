import { useState, useCallback, ChangeEvent } from 'react';
import { InitialState } from 'cb-hooks/dist/types/common';

const useMuiSlider = <TValue extends number | number[]>(
  initialValue: InitialState<TValue>,
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
