import { OnSubmit } from '../IntlLayout/utils';

export const handleSubmit: OnSubmit<ListFormatFormData> = ({
  listText,
  locale,
  localeMatcher,
  style,
  type,
}) => {
  const listFormat = new Intl.ListFormat(locale, {
    localeMatcher,
    style,
    type,
  });
  const list = listText.split(/\s*,\s*/);
  return listFormat.format(list);
};

export interface ListFormatFormData {
  listText: string;
  locale?: string;
  localeMatcher?: string;
  style?: string;
  type?: string;
}
