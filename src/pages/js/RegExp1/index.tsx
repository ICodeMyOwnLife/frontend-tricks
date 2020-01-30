import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import PositiveLookahead from './PositiveLookahead';
import PositiveLookbehind from './PositiveLookbehind';
import NegativeLookahead from './NegativeLookahead';
import NegativeLookbehind from './NegativeLookbehind';
import NamedCaptureGroup from './NamedCaptureGroup';
import questions from './questions';

export const RegExp1Component: FC = () => (
  <QuestionPage title="RegExp1" questions={questions}>
    <Section title="Positive Lookahead">
      <PositiveLookahead />
    </Section>
    <Section title="Negative Lookahead">
      <NegativeLookahead />
    </Section>
    <Section title="Positive Lookbehind">
      <PositiveLookbehind />
    </Section>
    <Section title="Negative Lookbehind">
      <NegativeLookbehind />
    </Section>
    <Section title="Named Capture Group">
      <NamedCaptureGroup />
    </Section>
  </QuestionPage>
);

const RegExp1 = memo(RegExp1Component);
RegExp1.displayName = 'RegExp1';
export default RegExp1;
