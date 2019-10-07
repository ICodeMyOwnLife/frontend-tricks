import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const Languages1Component: FC = () => (
  <QuestionPage title="Languages 1" questions={questions} />
);

const Languages1 = memo(Languages1Component);
Languages1.displayName = 'Languages1';
export default Languages1;
