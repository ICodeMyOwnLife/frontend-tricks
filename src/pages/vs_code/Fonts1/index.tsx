/* eslint-disable no-useless-escape */
import React, { FC, memo } from 'react';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import { useFetchText } from 'cb-hooks';
import questions from './questions';
import useStyles from './styles';

export const Fonts1Component: FC = () => {
  const classes = useStyles();
  const { result } = useFetchText('/vs_code/Fonts1/liga.txt');

  return (
    <QuestionPage
      className={classes.root}
      questions={questions}
      title="VS Code: Fonts 1"
    >
      <Section title="Fira Code">
        <div className={classes.firaTexts}>
          <div className={classes.firaTextGroup}>
            <Typography variant="subtitle1">With Ligatures</Typography>
            <p className={clsx(classes.firaText, classes.ligature)}>{result}</p>
          </div>
          <div className={classes.firaTextGroup}>
            <Typography variant="subtitle1">Without Ligatures</Typography>
            <p className={clsx(classes.firaText, classes.nonLigature)}>
              {result}
            </p>
          </div>
        </div>
      </Section>
    </QuestionPage>
  );
};

const Fonts1 = memo(Fonts1Component);
Fonts1.displayName = 'Fonts1';
export default Fonts1;
