import { FC, memo, ChangeEvent, useCallback } from 'react';
import Input, { InputProps } from 'components/Input';

export const TextInputComponent: FC<TextInputProps> = ({
  onChange,
  ...props
}) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.value),
    [onChange],
  );

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Input onChange={handleChange} {...props} />;
};

const TextInput = memo(TextInputComponent);
TextInput.displayName = 'TextInput';
export default TextInput;

export interface TextInputProps extends Omit<InputProps, 'onChange'> {
  onChange?: (value: string) => void;
}
