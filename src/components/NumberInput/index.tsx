import { FC, memo, ChangeEvent, useCallback } from 'react';
import Input, { InputProps } from 'components/Input';

export const NumberInputComponent: FC<NumberInputProps> = ({
  type = 'number',
  onChange,
  ...props
}) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      onChange && onChange(Number(e.target.value)),
    [onChange],
  );

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Input type={type} onChange={handleChange} {...props} />;
};

const NumberInput = memo(NumberInputComponent);
NumberInput.displayName = 'NumberInput';
export default NumberInput;

export interface NumberInputProps
  extends Omit<InputProps, 'onChange' | 'type'> {
  type?: 'number' | 'range';
  onChange?: (value: number) => void;
}
