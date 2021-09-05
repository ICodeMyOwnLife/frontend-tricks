import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const PreCommit1Component: FC = () => (
  <QuestionPage title="Pre-Commit 1" questions={questions} />
);

const PreCommit1 = memo(PreCommit1Component);
PreCommit1.displayName = 'PreCommit1';
export default PreCommit1;
