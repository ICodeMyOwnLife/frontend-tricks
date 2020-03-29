import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import Linear from './components/Linear';
import Radial from './components/Radial';
import Conic from './components/Conic';
import questions from './questions';

export const Gradient1Component: FC = () => (
  <QuestionPage questions={questions} title="Gradient 1">
    <Section title="Linear">
      <Linear />
    </Section>

    <Section title="Radial">
      <Radial />
    </Section>

    <Section title="Conic">
      <Conic />
    </Section>
  </QuestionPage>
);

const Gradient1 = memo(Gradient1Component);
Gradient1.displayName = 'Gradient1';
export default Gradient1;
