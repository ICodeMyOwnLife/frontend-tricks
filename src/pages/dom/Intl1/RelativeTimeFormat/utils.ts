import { OnSubmit } from '../../../../components/Experiment/utils';

export const handleSubmit: OnSubmit<RelativeTimeFormatFormData> = ({
  locale,
  localeMatcher,
  numeric,
  style,
  unit,
  value,
}) => {
  const relativeTimeFormat = new Intl.RelativeTimeFormat(locale, {
    localeMatcher,
    numeric,
    style,
  });
  return relativeTimeFormat.format(Number(value), unit);
};

export interface RelativeTimeFormatFormData {
  locale?: string;
  localeMatcher?: Intl.RelativeTimeFormatLocaleMatcher;
  numeric?: Intl.RelativeTimeFormatNumeric;
  style?: Intl.RelativeTimeFormatStyle;
  unit: Intl.RelativeTimeFormatUnit;
  value: number | string;
}
