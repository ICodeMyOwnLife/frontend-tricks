/* eslint-disable react/no-danger */
import React, { FC, memo } from 'react';
import Question, { QuestionInfo } from 'components/Question';

const questions: QuestionInfo[] = [
  {
    question: (
      <span>
        How to insert raw HTML in React (equivalent to setting{' '}
        <code>innerHTML</code>)?
      </span>
    ),
    answer: (
      <pre>
        <code>{`<div dangerouslySetInnerHTML={{ __html: rawHtml }} />`}</code>
      </pre>
    ),
    references: [
      {
        name: `[React] dangerouslySetInnerHTML`,
        url: `https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml`,
      },
    ],
  },
];

const rawHtml = `<ul>
  <li><a href="https://google.com">Go to Google<a/></li>
  <li><a href="https://facebook.com">Go to Facebook<a/></li>
  <li><a href="https://twitter.com">Go to Twitter<a/></li>
</ul>`;

export const RawHtml1Impl: FC = () => (
  <Question title="Raw HTML 1" questions={questions}>
    <div>{rawHtml}</div>
    <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
  </Question>
);

const RawHtml1 = memo(RawHtml1Impl);
RawHtml1.displayName = 'RawHtml1';
export default RawHtml1;
