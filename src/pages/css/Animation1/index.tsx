import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import PlayState from './components/PlayState';
import questions from './questions';

export const Animation1Component: FC = () => (
  <QuestionPage questions={questions} title="CSS: Animation 1">
    <Section title="Play State">
      <PlayState />
    </Section>
  </QuestionPage>
);

const Animation1 = memo(Animation1Component);
Animation1.displayName = 'Animation1';
export default Animation1;
