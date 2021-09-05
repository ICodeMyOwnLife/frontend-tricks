import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to convert a string to an array of character?`,
    answer: <CodeViewer language="tsx">Array.from(text)</CodeViewer>,
  },
  {
    question: `How to fill an array with values?`,
    answer: (
      <div>
        <p>
          Use <code>Array.fill()</code> instance method
        </p>
        <CodeViewer language="tsx">Array(length).fill(fillValue)</CodeViewer>

        <p>
          Use <code>Array.from()</code>
        </p>
        <CodeViewer language="tsx">{`Array.from({ length }, () => fillValue)`}</CodeViewer>
      </div>
    ),
  },
  {
    question: `How to generate range of numbers?`,
    answer: (
      <CodeViewer language="tsx">{`Array.from({ length: rangeEnd }, (_, idx) => idx)`}</CodeViewer>
    ),
  },
  {
    question: `How to create an array of unique values?`,
    answer: (
      <CodeViewer language="tsx">{`Array.from({ length: rangeEnd }, (_, idx) => idx)`}</CodeViewer>
    ),
  },
];

export default questions;
