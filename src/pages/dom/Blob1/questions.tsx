import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: (
      <span>
        How to read from a <code>Blob</code>?
      </span>
    ),
    answer: (
      <div>
        <p>
          With <b>ES Next</b>, use <code>Blob.text()</code>,{' '}
          <code>Blob.arrayBuffer()</code>, or <code>Blob.stream()</code>
        </p>
        <p>
          Or convert to a <code>Response</code> object
        </p>
        <CodeViewer language="tsx">
          {`export const readBlobArrayBuffer = (blob: Blob) =>
  blob.arrayBuffer().then(readArrayBuffer);

export const readBlobStream = (blob: Blob) => readStream(blob.stream());

export const readBlobText = (blob: Blob) => blob.text();

export const readResponseArrayBuffer = (blob: Blob) =>
  new Response(blob).arrayBuffer().then(readArrayBuffer);

export const readResponseStream = (blob: Blob) =>
  readStream(new Response(blob).body!);

export const readResponseText = (blob: Blob) => new Response(blob).text();`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] Blob`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Blob`,
      },
    ],
  },
];

export default questions;
