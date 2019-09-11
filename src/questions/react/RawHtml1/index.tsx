/* eslint-disable react/no-danger */
import React, { FC, memo } from 'react';
import Question from 'components/Question';
import questions from './questions';

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
