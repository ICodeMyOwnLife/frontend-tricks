import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import StaticText from './components/StaticText';
import HoverText from './components/HoverText';
import ShinyText from './components/ShinyText';
import questions from './questions';

export const TextBackground1Component: FC = () => (
  <QuestionPage questions={questions} title="Text Background 1">
    <Section title="Static Text">
      <StaticText variant="linear">LINEAR</StaticText>
      <StaticText variant="radial">RADIAL</StaticText>
      <StaticText variant="conic">CONIC</StaticText>
      <StaticText variant="image">IMAGE</StaticText>
    </Section>

    <Section title="Hover Text">
      <HoverText variant="horizontal">HORIZONTAL</HoverText>
      <HoverText variant="vertical">VERTICAL</HoverText>
      <HoverText variant="diagonal">DIAGONAL</HoverText>
    </Section>

    <Section title="Shiny Text">
      <ShinyText />
    </Section>
  </QuestionPage>
);

const TextBackground1 = memo(TextBackground1Component);
TextBackground1.displayName = 'TextBackground1';
export default TextBackground1;
