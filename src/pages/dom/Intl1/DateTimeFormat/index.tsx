import React, { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import InputControl from 'components/InputControl';
import Select from 'components/Select';
import { renderOptions } from 'utils/render';
import IntlLayout from '../IntlLayout';
import { DateTimeFormatFormData, handleSubmit } from './utils';
import { localeOptions, localeValues } from '../common';

const formatTimeZoneValues = ['long', 'short'] as const;
const formatTextValues = ['long', 'short', 'narrow'] as const;
const formatNumericValues = ['numeric', '2-digit'] as const;
const formatTextNumericValues = [
  'long',
  'short',
  'narrow',
  'numeric',
  '2-digit',
];

const formatTimeZoneOptions = renderOptions(formatTimeZoneValues);
const formatTextOptions = renderOptions(formatTextValues);
const formatNumericOptions = renderOptions(formatNumericValues);
const formatTextNumericOptions = renderOptions(formatTextNumericValues);

export const DateTimeFormatComponent: FC = () => {
  const form = useForm<DateTimeFormatFormData>();
  const { register } = form;

  return (
    <IntlLayout form={form} onSubmit={handleSubmit}>
      <InputControl
        component={Select}
        componentChildren={localeOptions}
        defaultValue={Object.keys(localeValues)[0]}
        form={form}
        inputRef={register}
        name="locale"
      />
      <InputControl
        component={Select}
        componentChildren={formatTextOptions}
        defaultValue={formatTextValues[0]}
        form={form}
        inputRef={register}
        name="weekday"
      />
      <InputControl
        component={Select}
        componentChildren={formatTextOptions}
        defaultValue={formatTextValues[0]}
        form={form}
        inputRef={register}
        name="era"
      />
      <InputControl
        component={Select}
        componentChildren={formatNumericOptions}
        defaultValue={formatNumericValues[0]}
        form={form}
        inputRef={register}
        name="year"
      />
      <InputControl
        component={Select}
        componentChildren={formatTextNumericOptions}
        defaultValue={formatNumericValues[0]}
        form={form}
        inputRef={register}
        name="month"
      />
      <InputControl
        component={Select}
        componentChildren={formatNumericOptions}
        defaultValue={formatNumericValues[0]}
        form={form}
        inputRef={register}
        name="day"
      />
      <InputControl
        component={Select}
        componentChildren={formatNumericOptions}
        defaultValue={formatNumericValues[0]}
        form={form}
        inputRef={register}
        name="hour"
      />
      <InputControl
        component={Select}
        componentChildren={formatNumericOptions}
        defaultValue={formatNumericValues[0]}
        form={form}
        inputRef={register}
        name="minute"
      />
      <InputControl
        component={Select}
        componentChildren={formatNumericOptions}
        defaultValue={formatNumericValues[0]}
        form={form}
        inputRef={register}
        name="second"
      />
      <InputControl
        component={Select}
        componentChildren={formatTimeZoneOptions}
        defaultValue={formatTimeZoneValues[0]}
        form={form}
        inputRef={register}
        name="timeZoneName"
      />
    </IntlLayout>
  );
};

const DateTimeFormat = memo(DateTimeFormatComponent);
DateTimeFormat.displayName = 'DateTimeFormat';
export default DateTimeFormat;
