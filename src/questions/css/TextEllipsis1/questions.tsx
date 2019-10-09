import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `Truncate long text in table column and replace with ellipsis?`,
    answer: (
      <div>
        <p>Case 1: Other columns are fixed-width</p>
        <CodeViewer language="scss">
          {`td {
    white-space: nowrap;

  &.Td1 {
    max-width: 0; // this column will take the remaining width
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.Td4 {
    max-width: 100px; // this column will take 100px
    overflow: hidden;
    text-overflow: ellipsis;
  }
}`}
        </CodeViewer>

        <p>Case 2: Other columns are flexible-width</p>
        <CodeViewer language="scss">
          {`td {
    white-space: nowrap;

  &.Td1 {
    width: 100%;
    max-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[CSS-TRICKS] Truncate String with Ellipsis`,
        url: `https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/`,
      },
      {
        name: `[CSS-TRICKS] text-overflow`,
        url: `https://css-tricks.com/almanac/properties/t/text-overflow/`,
      },
      {
        name: `[MDN] text-overflow`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow`,
      },
    ],
  },
];

export default questions;
