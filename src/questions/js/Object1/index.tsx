import React, { FC, memo, CSSProperties } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';

function foo1() {
  // ad is a callable object
  const ad = Object.assign(
    () => {
      console.log(ad);
    },
    { b: 2, c: 3 },
  );
  ad();
}

export const Object1Component: FC = () => (
  <QuestionPage title="Object 1" questions={questions}>
    <Section title="Create a callable object">{foo1.toString()}</Section>
  </QuestionPage>
);

const styles: CSSProperties = {
  fontFamily: 'fira code, monospace',
  whiteSpace: 'pre',
  fontWeight: 500,
};

console.log(styles);

const Object1 = memo(Object1Component);
Object1.displayName = 'Object1';
export default Object1;

console.log(foo1.toString());
