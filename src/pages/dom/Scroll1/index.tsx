import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import ScrollSpy from './components/ScrollSpy';
import LazyLoad from './components/LazyLoad';
import questions from './questions';

export const Scroll1Component: FC = () => (
  <QuestionPage questions={questions} title="Scroll 1">
    <Section title="Scroll Spy">
      <ScrollSpy />
    </Section>

    <Section title="Lazy Load">
      <LazyLoad />
    </Section>
  </QuestionPage>
);

const Scroll1 = memo(Scroll1Component);
Scroll1.displayName = 'Scroll1';
export default Scroll1;
