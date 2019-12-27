import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const Memory1Component: FC = () => (
  <QuestionPage title="Memory 1" questions={questions} />
);

const Memory1 = memo(Memory1Component);
Memory1.displayName = 'Memory1';
export default Memory1;
