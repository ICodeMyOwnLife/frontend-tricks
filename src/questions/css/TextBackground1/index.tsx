import React, { FC, memo } from 'react';
import Question from 'components/Question';
import questions from './questions';
import Text from './Text';
import classes from './styles.module.scss';

export const TextBackground1Impl: FC = () => (
  <Question title="Text Background 1" questions={questions}>
    <Text className={classes.linear} />
    <Text className={classes.radial} />
    <Text className={classes.url} />
  </Question>
);

const TextBackground1 = memo(TextBackground1Impl);
TextBackground1.displayName = 'TextBackground1';
export default TextBackground1;
