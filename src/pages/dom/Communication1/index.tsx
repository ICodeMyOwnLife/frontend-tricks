import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';
import BroadcastChannel from './components/BroadcastChannel';
import SharedWorker from './components/SharedWorker';

export const Communication1Component: FC = () => (
  <QuestionPage title="Communication 1" questions={questions}>
    <Section title="Broadcast Channel">
      <BroadcastChannel />
    </Section>
    <Section title="Shared Worker">
      <SharedWorker />
    </Section>
  </QuestionPage>
);

const Communication1 = memo(Communication1Component);
Communication1.displayName = 'Communication1';
export default Communication1;
