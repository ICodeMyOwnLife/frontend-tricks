import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const CodeAnalysis1Component: FC = () => (
  <QuestionPage questions={questions} title="Code Analysis 1" />
);

const CodeAnalysis1 = memo(CodeAnalysis1Component);
CodeAnalysis1.displayName = 'CodeAnalysis1';
export default CodeAnalysis1;
