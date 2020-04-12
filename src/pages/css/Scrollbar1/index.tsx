import React, { FC, memo } from 'react';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';
import useStyles from './styles';
import { isObtrusiveScrollbar } from './utils';

export const Scrollbar1Component: FC = () => {
  const classes = useStyles();

  return (
    <QuestionPage
      className={classes.root}
      questions={questions}
      title="CSS: Scrollbar 1"
    >
      <Section title="Scrollbar">
        <div className={classes.wrapper}>
          <div className={classes.withCustomScrollbar}>
            <Typography variant="h6">Always show custom scrollbar</Typography>
            <div className={classes.container}>
              <div className={classes.content} />
            </div>
          </div>
          <div
            className={clsx({
              [classes.withCustomScrollbar]: isObtrusiveScrollbar(),
            })}
          >
            <Typography variant="h6">
              Only show when scrollbar is obtrusive
            </Typography>
            <div className={classes.container}>
              <div className={classes.content} />
            </div>
          </div>
        </div>
      </Section>
    </QuestionPage>
  );
};

const Scrollbar1 = memo(Scrollbar1Component);
Scrollbar1.displayName = 'Scrollbar1';
export default Scrollbar1;
