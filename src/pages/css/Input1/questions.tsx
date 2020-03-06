import React from 'react';
import { QuestionInfo } from 'types/app-common';

const questions: QuestionInfo[] = [
  {
    question: `How to give checkboxes and radio buttons custom styles without using extra elements?`,
    answer: (
      <div>
        <p>
          Style <code>::before</code> and/or <code>::after</code>{' '}
          pseudo-elements of inputs
        </p>
      </div>
    ),
  },
];

export default questions;
