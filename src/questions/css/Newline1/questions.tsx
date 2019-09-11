import React from 'react';
import { QuestionInfo } from 'components/Question';

const questions: QuestionInfo[] = [
  {
    question: (
      <span>
        How to wrap text at a newline (<code>\n</code>) character?
      </span>
    ),
    answer: (
      <ol>
        <li>
          Using <code>white-space: pre</code>, or{' '}
          <code>white-space: pre-line</code>, or{' '}
          <code>white-space: pre-wrap</code>.
        </li>
        <li>
          Using a <code>pre</code> element.
        </li>
      </ol>
    ),
    references: [
      {
        name: '[CSS-TRICKS] white-space',
        url: 'https://css-tricks.com/almanac/properties/w/whitespace/',
      },
      {
        name: '[MDN] white-space',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/white-space',
      },
    ],
  },
];

export default questions;
