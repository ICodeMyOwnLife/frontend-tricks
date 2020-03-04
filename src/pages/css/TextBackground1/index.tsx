import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import Text from './Text';
import questions from './questions';
import useStyles from './styles';

export const TextBackground1Component: FC = () => {
  const classes = useStyles();

  return (
    <QuestionPage
      className={classes.root}
      questions={questions}
      title="Text Background 1"
    >
      <Section title="Text Background">
        <Text className={classes.linearBackground} />
        <Text className={classes.radialBackground} />
        <Text className={classes.conicBackground} />
        <Text className={classes.imageBackground} />
      </Section>
    </QuestionPage>
  );
};

const TextBackground1 = memo(TextBackground1Component);
TextBackground1.displayName = 'TextBackground1';
export default TextBackground1;
