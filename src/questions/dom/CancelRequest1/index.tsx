import React, { FC, memo } from 'react';
import Question from 'components/Question';
import questions from './questions';

export const CancelRequest1Impl: FC = () => (
  <Question title="Cancel Request 1" questions={questions}>
    <div />
  </Question>
);

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
// https://developer.mozilla.org/en-US/docs/Web/API/AbortController
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/abort
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// https://github.com/axios/axios

const CancelRequest1 = memo(CancelRequest1Impl);
CancelRequest1.displayName = 'CancelRequest1';
export default CancelRequest1;
