import { QuestionInfo } from 'types/app-common';
import Code from 'components/Code';
import React from 'react';

const questions: QuestionInfo[] = [
  {
    question: `How to convert a string to an array of character?`,
    answer: <Code language="tsx">Array.from(text)</Code>,
  },
  {
    question: `How to fill an array with values?`,
    answer: (
      <div>
        <p>
          Use <code>Array.fill()</code> instance method
        </p>
        <Code language="tsx">Array(length).fill(fillValue)</Code>

        <p>
          Use <code>Array.from()</code>
        </p>
        <Code language="tsx">{`Array.from({ length }, () => fillValue)`}</Code>
      </div>
    ),
  },
  {
    question: `How to generate range of numbers?`,
    answer: (
      <Code language="tsx">{`Array.from({ length: rangeEnd }, (_, idx) => idx)`}</Code>
    ),
  },
  {
    question: `How to create an array of unique values?`,
    answer: (
      <Code language="tsx">{`Array.from({ length: rangeEnd }, (_, idx) => idx)`}</Code>
    ),
  },
];

export default questions;
