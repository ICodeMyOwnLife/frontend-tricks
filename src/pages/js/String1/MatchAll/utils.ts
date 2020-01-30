import { OnSubmit } from 'components/Experiment/utils';

export const handleSubmit: OnSubmit<MatchAllFormData> = ({
  flags,
  string,
  pattern,
}) => {
  const regex = new RegExp(pattern, flags);
  return Array.from(string.matchAll(regex)).map<MatchResult>(matchArray => {
    const { index, input, groups } = matchArray;
    return { matchArray, index, input, groups };
  });
};

export interface MatchAllFormData {
  flags?: string;
  string: string;
  pattern: string;
}

interface MatchResult {
  matchArray: RegExpMatchArray;
  index: number | undefined;
  input: string | undefined;
  groups: Record<string, string> | undefined;
}
