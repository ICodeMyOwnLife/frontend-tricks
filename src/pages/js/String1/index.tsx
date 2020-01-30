import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';
import MatchAll from './MatchAll';

export const String1Component: FC = () => (
  <QuestionPage title="String 1" questions={questions}>
    <Section title="Match All">
      <MatchAll />
    </Section>
  </QuestionPage>
);

const String1 = memo(String1Component);
String1.displayName = 'String1';
export default String1;
