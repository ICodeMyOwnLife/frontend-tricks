import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import PseudoElements from './PseudoElements';
import questions from './questions';
import useStyles from './styles';

export const PseudoElement1Component: FC = () => {
  const classes = useStyles();

  return (
    <QuestionPage
      className={classes.root}
      questions={questions}
      title="Pseudo-Element 1"
    >
      <Section title="Pseudo-Elements">
        <PseudoElements />
      </Section>
    </QuestionPage>
  );
};

const PseudoElement1 = memo(PseudoElement1Component);
PseudoElement1.displayName = 'PseudoElement1';
export default PseudoElement1;
