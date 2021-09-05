import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const Build1Component: FC = () => (
  <QuestionPage questions={questions} title="Build 1" />
);

const Build1 = memo(Build1Component);
Build1.displayName = 'Build1';
export default Build1;
