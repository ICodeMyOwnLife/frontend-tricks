import {
  useState,
  ChangeEvent,
  useCallback,
  FormEvent,
  cloneElement,
  ReactElement,
} from 'react';
import { get, cloneDeep, set } from 'lodash';

const useForm = <TData extends FormData>(initialData: TData) => {
  const [data, setData] = useState(initialData);
  const onChange = useCallback(
    (
      e:
        | ChangeEvent<HTMLInputElement | HTMLSelectElement>
        | FormEvent<HTMLFormElement>,
    ) => {
      const target = e.target as EventTarget & HTMLInputElement;

      setData(prevData => {
        const prevDataValue = get(prevData, target.name);
        let nextValue: number | string | boolean;

        switch (typeof prevDataValue) {
          case 'number':
            nextValue = Number(target.value);
            break;

          case 'string':
            nextValue = String(target.value);
            break;

          case 'boolean':
            nextValue = Boolean((target as HTMLInputElement).checked);
            break;

          default:
            // eslint-disable-next-line no-console
            console.warn(`Cannot find field with name ${target.name}`);
            return prevData;
        }

        const nextData = cloneDeep(prevData);
        set(nextData, target.name, nextValue);
        return nextData;
      });
    },
    [],
  );

  const getFieldDecorator = (name: string) => <TProps extends FieldProps>(
    element: ReactElement<TProps>,
  ) => {
    const value = get(data, name);
    let props: Partial<FieldProps> = {};

    switch (typeof value) {
      case 'string':
      case 'number':
        props = { value };
        break;

      case 'boolean':
        props = { checked: value };
        break;

      default:
        // eslint-disable-next-line no-console
        console.warn(`Cannot find field with name ${name}`);
        break;
    }

    return cloneElement<FieldProps>(element, {
      ...props,
      name,
      id: name,
      onChange,
    });
  };

  return [data, getFieldDecorator] as const;
};

export default useForm;

export interface FormData {
  [k: string]: string | number | boolean | FormData;
  [k: number]: string | number | boolean | FormData;
}

export interface FieldProps {
  name?: string;
  id?: string;
  value?: string | number;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}
