import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const Jest1Component: FC = () => (
  <QuestionPage title="Jest 1" questions={questions} />
);

const Jest1 = memo(Jest1Component);
Jest1.displayName = 'Jest1';
export default Jest1;
