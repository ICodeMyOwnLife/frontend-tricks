import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import BeforeLeave from './components/BeforeLeave';
import HistoryListen from './components/HistoryListen';
import questions from './questions';

export const History1Component: FC = () => (
  <QuestionPage questions={questions} title="DOM: History 1">
    <Section title="Before Leaving">
      <BeforeLeave />
    </Section>

    <Section title="History Change">
      <HistoryListen />
    </Section>
  </QuestionPage>
);

const History1 = memo(History1Component);
History1.displayName = 'History1';
export default History1;
