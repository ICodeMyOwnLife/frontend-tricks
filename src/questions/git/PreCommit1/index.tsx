import React, { FC, memo } from 'react';
import Question from 'components/Question';
import questions from './questions';

export const PreCommit1Component: FC = () => (
  <Question title="Pre-Commit 1" questions={questions} />
);

const PreCommit1 = memo(PreCommit1Component);
PreCommit1.displayName = 'PreCommit1';
export default PreCommit1;
