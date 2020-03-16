import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import BackgroundText from './BackgroundText';
import questions from './questions';
import useStyles from './styles';
import HoverText from './HoverText';

export const TextBackground1Component: FC = () => {
  const classes = useStyles();

  return (
    <QuestionPage
      className={classes.root}
      questions={questions}
      title="Text Background 1"
    >
      <Section title="Background Text">
        <BackgroundText className={classes.linearBackground} />
        <BackgroundText className={classes.radialBackground} />
        <BackgroundText className={classes.conicBackground} />
        <BackgroundText className={classes.imageBackground} />
      </Section>

      <Section title="Hover Text">
        <HoverText className={classes.hoverText1} />
        <HoverText className={classes.hoverText2} />
        <HoverText className={classes.hoverText3} />
      </Section>
    </QuestionPage>
  );
};

const TextBackground1 = memo(TextBackground1Component);
TextBackground1.displayName = 'TextBackground1';
export default TextBackground1;
