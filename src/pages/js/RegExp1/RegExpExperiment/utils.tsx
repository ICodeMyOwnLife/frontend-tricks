/* eslint-disable no-cond-assign */
import { OnSubmit } from 'components/Experiment/utils';

export const handleSubmit: OnSubmit<RegExpExperimentFormData> = ({
  flags,
  string,
  pattern,
}) => {
  const regex = new RegExp(pattern, flags);
  const results: MatchResult[] = [];
  let matchArray: RegExpExecArray | null = null;

  while ((matchArray = regex.exec(string))) {
    const { index, input, groups } = matchArray;
    results.push({ matchArray, index, input, groups });
  }

  return results;
};

export interface RegExpExperimentFormData {
  flags?: string;
  string: string;
  pattern: string;
}

interface MatchResult {
  matchArray: RegExpExecArray;
  index: number;
  input: string;
  groups: Record<string, string> | undefined;
}
