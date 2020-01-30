import { OnSubmit } from '../../../../components/Experiment/utils';

export const handleSubmit: OnSubmit<CollatorFormData> = ({
  caseFirst,
  ignorePunctuation,
  listText,
  locale,
  localeMatcher,
  numeric,
  sensitivity,
  usage,
}) => {
  const collator = new Intl.Collator(locale, {
    caseFirst,
    ignorePunctuation,
    localeMatcher,
    numeric,
    sensitivity,
    usage,
  });
  const list = listText.split(/\s*,\s*/);
  return list.sort(collator.compare).join(', ');
};

export interface CollatorFormData {
  caseFirst?: string;
  ignorePunctuation?: boolean;
  listText: string;
  locale?: string;
  localeMatcher?: string;
  numeric?: boolean;
  sensitivity?: string;
  usage?: string;
}
