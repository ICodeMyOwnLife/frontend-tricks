import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import Linear from './components/Linear';
import RepeatingLinear from './components/RepeatingLinear';
import Radial from './components/Radial';
import RepeatingRadial from './components/RepeatingRadial';
import Conic from './components/Conic';
import RepeatingConic from './components/RepeatingConic';
import questions from './questions';

export const Gradient1Component: FC = () => (
  <QuestionPage questions={questions} title="Gradient 1">
    <Section title="Linear">
      <Linear />
    </Section>

    <Section title="Repeating Linear">
      <RepeatingLinear />
    </Section>

    <Section title="Radial">
      <Radial />
    </Section>

    <Section title="Repeating Radial">
      <RepeatingRadial />
    </Section>

    <Section title="Conic">
      <Conic />
    </Section>

    <Section title="Repeating Conic">
      <RepeatingConic />
    </Section>
  </QuestionPage>
);

const Gradient1 = memo(Gradient1Component);
Gradient1.displayName = 'Gradient1';
export default Gradient1;
