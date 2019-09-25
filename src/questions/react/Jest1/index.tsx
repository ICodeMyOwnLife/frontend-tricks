import React, { FC, memo } from 'react';
import Question from 'components/Question';
import questions from './questions';

export const Jest1Component: FC = () => (
  <Question title="Jest 1" questions={questions} />
);

const Jest1 = memo(Jest1Component);
Jest1.displayName = 'Jest1';
export default Jest1;
