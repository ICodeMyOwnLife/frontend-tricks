import React, { FC, memo } from 'react';
import Question from 'components/Question';
import questions from './questions';

export const Memory1Component: FC = () => (
  <Question title="Memory 1" questions={questions} />
);

const Memory1 = memo(Memory1Component);
Memory1.displayName = 'Memory1';
export default Memory1;
