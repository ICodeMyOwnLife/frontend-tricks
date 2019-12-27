import React, { FC, memo } from 'react';
import { Grid, Box } from '@material-ui/core';
import clsx from 'clsx';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';
import useStyles from './styles';

export const Background1Component: FC = () => {
  const classes = useStyles();

  return (
    <QuestionPage
      className={classes.root}
      title="Background 1"
      questions={questions}
    >
      <Section title="Multi-layer Background">
        <Grid container spacing={3} direction="column">
          <Grid item>
            <Box className={clsx(classes.rectangle, classes.multiLayer1)} />
          </Grid>
          <Grid item>
            <Box className={clsx(classes.rectangle, classes.multiLayer2)} />
          </Grid>
          <Grid item>
            <Box className={clsx(classes.rectangle, classes.multiLayer3)} />
          </Grid>
        </Grid>
      </Section>
    </QuestionPage>
  );
};

const Background1 = memo(Background1Component);
Background1.displayName = 'Background1';
export default Background1;
