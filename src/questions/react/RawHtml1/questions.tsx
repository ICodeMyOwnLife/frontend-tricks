import React from 'react';
import { QuestionInfo } from 'types/app-common';
import Code from 'components/Code';

const questions: QuestionInfo[] = [
  {
    question: (
      <span>
        How to insert raw HTML in React (equivalent to setting{' '}
        <code>innerHTML</code>)?
      </span>
    ),
    answer: (
      <Code language="tsx">
        {`<div dangerouslySetInnerHTML={{ __html: rawHtml }} />`}
      </Code>
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
