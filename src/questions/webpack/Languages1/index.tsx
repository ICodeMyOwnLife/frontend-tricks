import React, { FC, memo } from 'react';
import Question from 'components/Question';
import questions from './questions';

export const Languages1Component: FC = () => (
  <Question title="Languages 1" questions={questions} />
);

const Languages1 = memo(Languages1Component);
Languages1.displayName = 'Languages1';
export default Languages1;
