import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const Linter1Component: FC = () => (
  <QuestionPage title="Linter 1" questions={questions} />
);

const Linter1 = memo(Linter1Component);
Linter1.displayName = 'Linter1';
export default Linter1;
