/* eslint-disable no-unused-expressions */
import { ChangeEvent, useCallback, useState } from 'react';
import { BaseColor } from 'utils/colors/BaseColor';

const getHueValue = (value: number | number[] | undefined) =>
  Array.isArray(value) ? value[0] : value ?? 0;

export const useColorSlider = ({
  thumbColorCreator,
  defaultValue,
  onChange,
  value,
}: {
  thumbColorCreator: (value: number) => BaseColor;
  defaultValue: number | number[];
  onChange:
    | ((e: ChangeEvent<{}>, value: number | number[]) => void)
    | undefined;
  value: number | number[] | undefined;
}) => {
  const [thumbColor, setThumbColor] = useState(() =>
    thumbColorCreator(getHueValue(value ?? defaultValue)),
  );
  const handleChange = useCallback(
    (e: ChangeEvent<{}>, newValue: number | number[]) => {
      setThumbColor(thumbColorCreator(getHueValue(newValue)));
      onChange?.(e, newValue);
    },
    [thumbColorCreator, onChange],
  );
  return { handleChange, thumbColor };
};
