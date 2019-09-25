import React, { FC, memo } from 'react';
import Question from 'components/Question';
import questions from './questions';

export const GitLab1Component: FC = () => (
  <Question title="GitLab 1" questions={questions} />
);

const GitLab1 = memo(GitLab1Component);
GitLab1.displayName = 'GitLab1';
export default GitLab1;
