import React, { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@material-ui/core';
import InputControl from 'components/InputControl';
import Select from 'components/Select';
import { renderOptions } from 'utils/render';
import IntlLayout from '../IntlLayout';
import { RelativeTimeFormatFormData, handleSubmit } from './utils';
import {
  localeOptions,
  localeMatcherOptions,
  textStyleOptions,
} from '../common';

const numericValues = ['always', 'auto'] as const;
const numericOptions = renderOptions(numericValues);

const unitValues = [
  'second',
  'minute',
  'hour',
  'day',
  'month',
  'year',
] as const;
const unitOptions = renderOptions(unitValues);

export const RelativeTimeFormatComponent: FC = () => {
  const form = useForm<RelativeTimeFormatFormData>();
  const { register } = form;

  return (
    <IntlLayout form={form} onSubmit={handleSubmit}>
      <InputControl
        component={Input}
        form={form}
        inputRef={register({ required: 'Required' })}
        label="Value"
        name="value"
        type="number"
      />
      <InputControl
        component={Select}
        componentChildren={unitOptions}
        form={form}
        label="Unit"
        name="unit"
        validationOptions={{ required: 'Required' }}
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
        componentChildren={numericOptions}
        form={form}
        label="Numeric"
        name="numeric"
      />
      <InputControl
        component={Select}
        componentChildren={textStyleOptions}
        form={form}
        label="Style"
        name="style"
      />
    </IntlLayout>
  );
};

const RelativeTimeFormat = memo(RelativeTimeFormatComponent);
RelativeTimeFormat.displayName = 'RelativeTimeFormat';
export default RelativeTimeFormat;
