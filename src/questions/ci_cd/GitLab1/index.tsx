import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const GitLab1Component: FC = () => (
  <QuestionPage title="GitLab 1" questions={questions} />
);

const GitLab1 = memo(GitLab1Component);
GitLab1.displayName = 'GitLab1';
export default GitLab1;
