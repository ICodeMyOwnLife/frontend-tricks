import { OnSubmit } from '../IntlLayout/utils';

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
  const format = new Intl.DateTimeFormat(locale, {
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
  return format.format(new Date());
};

export interface DateTimeFormatFormData {
  day?: string;
  era?: string;
  formatMatcher?: string;
  hour?: string;
  hour12?: boolean;
  locale: string;
  localeMatcher?: string;
  minute?: string;
  month?: string;
  second?: string;
  timeZone?: string;
  timeZoneName?: string;
  weekday?: string;
  year?: string;
}
