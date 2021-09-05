import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const Module1Component: FC = () => (
  <QuestionPage questions={questions} title="JS: Module 1" />
);

const Module1 = memo(Module1Component);
Module1.displayName = 'Module1';
export default Module1;
