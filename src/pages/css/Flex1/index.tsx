import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import Masonry from 'components/Masonry';
import PropsFlex from './PropsFlex';
import questions from './questions';
import useStyles from './styles';

export const Flex1Component: FC = () => {
  const classes = useStyles();

  return (
    <QuestionPage className={classes.root} questions={questions} title="Flex 1">
      <Section title="align-items vs align-content vs align-self">
        <PropsFlex />
      </Section>

      <Section title="Static Masonry Layout">
        <Masonry className={classes.masonry} />
      </Section>
    </QuestionPage>
  );
};

const Flex1 = memo(Flex1Component);
Flex1.displayName = 'Flex1';
export default Flex1;
