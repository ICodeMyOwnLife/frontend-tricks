import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import ScrollSpy from './components/ScrollSpy';
import questions from './questions';

export const Scroll1Component: FC = () => (
  <QuestionPage questions={questions} title="Scroll 1">
    <Section title="ScrollSpy">
      <ScrollSpy />
    </Section>
  </QuestionPage>
);

const Scroll1 = memo(Scroll1Component);
Scroll1.displayName = 'Scroll1';
export default Scroll1;
