import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const Commit1Component: FC = () => (
  <QuestionPage questions={questions} title="Commit 1" />
);

const Commit1 = memo(Commit1Component);
Commit1.displayName = 'Commit1';
export default Commit1;
