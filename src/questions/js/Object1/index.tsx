import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';
import { callableObject, fromEntries } from './functions';
import FunctionExecuter from './FunctionExecuter';

export const Object1Component: FC = () => (
  <QuestionPage title="Object 1" questions={questions}>
    <Section title="Create a callable object">
      <FunctionExecuter func={callableObject} />
    </Section>

    <Section title="Create an object from entries">
      <FunctionExecuter func={fromEntries} />
    </Section>
  </QuestionPage>
);

const Object1 = memo(Object1Component);
Object1.displayName = 'Object1';
export default Object1;
