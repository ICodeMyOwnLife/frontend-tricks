import { OnSubmit } from '../../../../components/Experiment/utils';

export const handleSubmit: OnSubmit<DateTimeFormatFormData> = ({
  day,
  era,
  formatMatcher,
  hour,
  hour12,
  locale,
  localeMatcher,
  minute,
  month,
  second,
  timeZone,
  timeZoneName,
  weekday,
  year,
}) => {
  const dateTimeFormat = new Intl.DateTimeFormat(locale, {
    day,
    era,
    formatMatcher,
    hour,
    hour12,
    localeMatcher,
    minute,
    month,
    second,
    timeZone,
    timeZoneName,
    weekday,
    year,
  });
  return dateTimeFormat.format(new Date());
};

export interface DateTimeFormatFormData extends Intl.DateTimeFormatOptions {
  locale?: string;
}
