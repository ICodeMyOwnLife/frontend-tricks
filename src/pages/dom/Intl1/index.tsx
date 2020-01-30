import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import Collator from './Collator';
import DateTimeFormat from './DateTimeFormat';
import ListFormat from './ListFormat';
import RelativeTimeFormat from './RelativeTimeFormat';
import questions from './questions';

export const Intl1Component: FC = () => (
  <QuestionPage title="Intl 1" questions={questions}>
    <Section title="Collator">
      <Collator />
    </Section>
    <Section title="DateTimeFormat">
      <DateTimeFormat />
    </Section>
    <Section title="ListFormat">
      <ListFormat />
    </Section>
    <Section title="RelativeTimeFormat">
      <RelativeTimeFormat />
    </Section>
  </QuestionPage>
);

const Intl1 = memo(Intl1Component);
Intl1.displayName = 'Intl1';
export default Intl1;
