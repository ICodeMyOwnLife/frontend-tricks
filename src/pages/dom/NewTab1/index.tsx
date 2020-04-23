import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import OpenerReferer from './components/OpenerReferrer';
import questions from './questions';

export const NewTab1Component: FC = () => (
  <QuestionPage questions={questions} title="DOM: New Tab 1">
    <Section title="Opener and Referer">
      <OpenerReferer />
    </Section>
  </QuestionPage>
);

const NewTab1 = memo(NewTab1Component);
NewTab1.displayName = 'NewTab1';
export default NewTab1;
