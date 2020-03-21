import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const Specificity1Component: FC = () => (
  <QuestionPage questions={questions} title="Specificity 1" />
);

const Specificity1 = memo(Specificity1Component);
Specificity1.displayName = 'Specificity1';
export default Specificity1;
