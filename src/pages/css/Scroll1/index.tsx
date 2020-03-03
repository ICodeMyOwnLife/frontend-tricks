import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import ScrollMargin from './ScrollMargin';
import ScrollSnap from './ScrollSnap';
import questions from './questions';

export const Scroll1Component: FC = () => (
  <QuestionPage questions={questions} title="Scroll 1">
    <Section title="Scroll Margin">
      <ScrollMargin />
    </Section>
    <Section title="Scroll Snap">
      <ScrollSnap />
    </Section>
  </QuestionPage>
);

const Scroll1 = memo(Scroll1Component);
Scroll1.displayName = 'Scroll1';
export default Scroll1;
