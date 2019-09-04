import { QuestionInfo } from 'components/Question';
import React from 'react';
import Code from 'components/Code';

const questions: QuestionInfo[] = [
  {
    question: (
      <p>
        How to create shapes using only one <code>div</code>?
      </p>
    ),
    answer: <Code language="scss">a</Code>,
    references: [
      {
        name: `[CSS-TRICKS] The Shapes of CSS`,
        url: `https://css-tricks.com/the-shapes-of-css/`,
      },
    ],
  },
];

export default questions;
