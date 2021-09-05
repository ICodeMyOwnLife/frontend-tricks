import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import StaticText from './components/StaticText';
import HoverText from './components/HoverText';
import ShinyText from './components/ShinyText';
import questions from './questions';

export const TextBackground1Component: FC = () => (
  <QuestionPage questions={questions} title="Text Background 1">
    <Section title="Static Text">
      <StaticText variant="linear">LINEAR BACKGROUND</StaticText>
      <StaticText variant="radial">RADIAL BACKGROUND</StaticText>
      <StaticText variant="conic">CONIC BACKGROUND</StaticText>
      <StaticText variant="image">IMAGE BACKGROUND</StaticText>
    </Section>

    <Section title="Hover Text">
      <HoverText variant="horizontal">HORIZONTAL FILL EFFECT</HoverText>
      <HoverText variant="vertical">VERTICAL FILL EFFECT</HoverText>
      <HoverText variant="diagonal">DIAGONAL FILL EFFECT</HoverText>
    </Section>

    <Section title="Shiny Text">
      <ShinyText>PRETTY SHINY TEXT</ShinyText>
    </Section>
  </QuestionPage>
);

const TextBackground1 = memo(TextBackground1Component);
TextBackground1.displayName = 'TextBackground1';
export default TextBackground1;
