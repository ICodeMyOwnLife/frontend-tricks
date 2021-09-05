import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: (
      <span>
        How to insert raw HTML in React (equivalent to setting{' '}
        <code>innerHTML</code>)?
      </span>
    ),
    answer: (
      <CodeViewer language="tsx">
        {`<div dangerouslySetInnerHTML={{ __html: rawHtml }} />`}
      </CodeViewer>
    ),
    references: [
      {
        name: `[React] dangerouslySetInnerHTML`,
        url: `https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml`,
      },
    ],
  },
];

export default questions;
