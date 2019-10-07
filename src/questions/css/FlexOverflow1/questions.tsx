import React from 'react';
import { QuestionInfo } from 'types/app-common';
import Code from 'components/Code';

const questions: QuestionInfo[] = [
  {
    question: `How to prevent flex items from overflowing a flex container?`,
    answer: (
      <div>
        <p>
          For fixed-with item: Set <code>flex-grow</code> and{' '}
          <code>flex-shrink</code> to 0 and set <code>flex-basis</code> to the
          width of the item:
        </p>

        <Code language="scss">
          {`.LeftColumn {
  flex: 0 0 64px;
}`}
        </Code>

        <p>
          For overflow-hidden item: Set <code>flex-grow</code> and{' '}
          <code>flex-shrink</code> to a positive value, set{' '}
          <code>min-width</code> to a finite value, and set{' '}
          <code>overflow</code> to a value other than <code>visible</code>:
        </p>

        <Code language="scss">
          {`.RightColumn {
  flex: 1;
  min-width: 0;
  overflow-x: auto;
}`}
        </Code>
      </div>
    ),
  },
];

export default questions;
