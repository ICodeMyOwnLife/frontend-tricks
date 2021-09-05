import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@material-ui/core';
import InputControl from 'components/InputControl';
import Select from 'components/Select';
import Experiment from 'components/Experiment';
import { renderOptions } from 'utils/render';
import { ListFormatFormData, handleSubmit } from './utils';
import {
  localeOptions,
  localeMatcherOptions,
  textStyleOptions,
} from '../common';

const typeValues = ['conjunction', 'disjunction', 'unit'] as const;
const typeOptions = renderOptions(typeValues);

export const ListFormatComponent: FC = () => {
  const form = useForm<ListFormatFormData>();
  const { register } = form;

  return (
    <Experiment form={form} onSubmit={handleSubmit}>
      <InputControl
        component={Input}
        form={form}
        inputRef={register({ required: 'Required' })}
        label="List"
        name="listText"
      />
      <InputControl
        component={Select}
        componentChildren={localeOptions}
        form={form}
        label="Locale"
        name="locale"
      />
      <InputControl
        component={Select}
        componentChildren={localeMatcherOptions}
        form={form}
        label="Locale Matcher"
        name="localeMatcher"
      />
      <InputControl
        component={Select}
        componentChildren={typeOptions}
        form={form}
        label="Type"
        name="type"
      />
      <InputControl
        component={Select}
        componentChildren={textStyleOptions}
        form={form}
        label="Style"
        name="style"
      />
    </Experiment>
  );
};

const ListFormat = memo(ListFormatComponent);
ListFormat.displayName = 'ListFormat';
export default ListFormat;
