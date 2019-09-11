import React, { FC, memo } from 'react';
import Question from 'components/Question';
import questions from './questions';

export const CancelRequest1Impl: FC = () => (
  <Question title="Cancel Request 1" questions={questions}>
    <div />
  </Question>
);

const CancelRequest1 = memo(CancelRequest1Impl);
CancelRequest1.displayName = 'CancelRequest1';
export default CancelRequest1;
