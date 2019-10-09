import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

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

        <CodeViewer language="scss">
          {`.LeftColumn {
  flex: 0 0 64px;
}`}
        </CodeViewer>

        <p>
          For overflow-hidden item: Set <code>flex-grow</code> and{' '}
          <code>flex-shrink</code> to a positive value, set{' '}
          <code>min-width</code> to a finite value, and set{' '}
          <code>overflow</code> to a value other than <code>visible</code>:
        </p>

        <CodeViewer language="scss">
          {`.RightColumn {
  flex: 1;
  min-width: 0;
  overflow-x: auto;
}`}
        </CodeViewer>
      </div>
    ),
  },
];

export default questions;
