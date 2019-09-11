import React from 'react';
import { QuestionInfo } from 'components/Question';
import Code from 'components/Code';

const questions: QuestionInfo[] = [
  {
    question: (
      <span>
        How to cancel an <code>XMLHttpRequest</code>?
      </span>
    ),
    answer: (
      <div>
        <p>
          Call <code>XMLHttpRequest.abort()</code>
        </p>
        <Code language="tsx">
          {`const request = new XMLHttpRequest();
request.open('GET', url);
request.send(params);

if (SHOULD_CANCEL_REQUEST) request.abort();`}
        </Code>
      </div>
    ),
    references: [
      {
        name: `[MDN] XMLHttpRequest`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest`,
      },
      {
        name: `[MDN] XMLHttpRequest.readyState`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState`,
      },
      {
        name: `[MDN] XMLHttpRequest.abort()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/abort`,
      },
      {
        name: `[MDN] Using XMLHttpRequest`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest`,
      },
    ],
  },
  {
    question: (
      <span>
        How to cancel a <code>fetch</code> request?
      </span>
    ),
    answer: (
      <div>
        <p>
          Specify an <code>AbortSignal</code> when calling <code>fetch()</code>{' '}
          and call <code>AbortController.abort()</code> when needed
        </p>
        <Code language="tsx">
          {`const request = new Request(url);
const abortController = new AbortController();
const response = await fetch(request, {
  method: 'GET',
  signal: abortController.signal,
  body: params,
});

if (SHOULD_CANCEL_REQUEST) abortController.abort();`}
        </Code>
      </div>
    ),
    references: [
      {
        name: `[MDN] Fetch API`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API`,
      },
      {
        name: `[MDN] WindowOrWorkerGlobalScope.fetch()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch`,
      },
      {
        name: `[MDN] AbortSignal`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal`,
      },
      {
        name: `[MDN] AbortController`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/AbortController`,
      },
    ],
  },
  {
    question: (
      <span>
        How to cancel an <code>axios</code> request?
      </span>
    ),
    answer: (
      <div>
        <p>
          Specify a <code>CancelToken</code> when calling{' '}
          <code>Axios.request()</code> and call{' '}
          <code>CancelTokenSource.cancel()</code> when needed
        </p>
        <Code language="tsx">
          {`  const cancelTokenSource = Axios.CancelToken.source();
const response = await Axios.request({
  url,
  method: 'GET',
  params,
  cancelToken: cancelTokenSource.token,
});

if (SHOULD_CANCEL_REQUEST) cancelTokenSource.cancel();`}
        </Code>
      </div>
    ),
  },
];

export default questions;
