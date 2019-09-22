import React, { FC, memo } from 'react';
import Question from 'components/Question';
import questions from './questions';

export const Deployment1Component: FC = () => (
  <Question title="Deployment 1" questions={questions} />
);

const Deployment1 = memo(Deployment1Component);
export default Deployment1;
