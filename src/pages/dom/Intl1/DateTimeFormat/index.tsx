import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import InputControl from 'components/InputControl';
import Select from 'components/Select';
import CheckboxControl from 'components/CheckboxControl';
import Experiment from 'components/Experiment';
import { renderOptions } from 'utils/render';
import { DateTimeFormatFormData, handleSubmit } from './utils';
import {
  localeOptions,
  localeMatcherOptions,
  formatMatcherOptions,
  textStyleOptions,
  numberStyleOptions,
} from '../common';

const timeZoneValues = [
  'America/New_York',
  'Asia/Kuala_Lumpur',
  'Asia/Saigon',
  'Asia/Tokyo',
  'Canada/Pacific',
] as const;
const formatTimeZoneValues = ['long', 'short'] as const;
const formatTextNumericValues = [
  'long',
  'short',
  'narrow',
  'numeric',
  '2-digit',
];

const timeZoneOptions = renderOptions(timeZoneValues);
const formatTimeZoneOptions = renderOptions(formatTimeZoneValues);
const formatTextNumericOptions = renderOptions(formatTextNumericValues);

export const DateTimeFormatComponent: FC = () => {
  const form = useForm<DateTimeFormatFormData>();
  const { register } = form;

  return (
    <Experiment form={form} onSubmit={handleSubmit}>
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
        componentChildren={timeZoneOptions}
        form={form}
        label="Time Zone"
        name="timeZone"
      />
      <InputControl
        component={Select}
        componentChildren={formatMatcherOptions}
        form={form}
        label="Format Matcher"
        name="formatMatcher"
      />
      <InputControl
        component={Select}
        componentChildren={textStyleOptions}
        form={form}
        label="Weekday"
        name="weekday"
      />
      <InputControl
        component={Select}
        componentChildren={textStyleOptions}
        form={form}
        label="Era"
        name="era"
      />
      <InputControl
        component={Select}
        componentChildren={numberStyleOptions}
        form={form}
        label="Year"
        name="year"
      />
      <InputControl
        component={Select}
        componentChildren={formatTextNumericOptions}
        form={form}
        label="Month"
        name="month"
      />
      <InputControl
        component={Select}
        componentChildren={numberStyleOptions}
        form={form}
        label="Day"
        name="day"
      />
      <InputControl
        component={Select}
        componentChildren={numberStyleOptions}
        form={form}
        label="Hour"
        name="hour"
      />
      <InputControl
        component={Select}
        componentChildren={numberStyleOptions}
        form={form}
        label="Minute"
        name="minute"
      />
      <InputControl
        component={Select}
        componentChildren={numberStyleOptions}
        form={form}
        label="Second"
        name="second"
      />
      <InputControl
        component={Select}
        componentChildren={formatTimeZoneOptions}
        form={form}
        label="Time Zone Name"
        name="timeZoneName"
      />
      <CheckboxControl
        form={form}
        inputRef={register}
        label="Hour 12"
        name="hour12"
      />
    </Experiment>
  );
};

const DateTimeFormat = memo(DateTimeFormatComponent);
DateTimeFormat.displayName = 'DateTimeFormat';
export default DateTimeFormat;
