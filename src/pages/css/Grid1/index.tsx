import React, { FC, memo } from 'react';
import clsx from 'clsx';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';
import useStyles from './styles';

export const Grid1Component: FC = () => {
  const classes = useStyles();

  return (
    <QuestionPage className={classes.root} title="Grid 1" questions={questions}>
      <Section title="auto-fill">
        <div className={clsx(classes.grid, classes.autoFillGrid)}>
          <div className={classes.column} />
          <div className={classes.column} />
          <div className={classes.column} />
        </div>
      </Section>
      <Section title="auto-fit">
        <div className={clsx(classes.grid, classes.autoFitGrid)}>
          <div className={classes.column} />
          <div className={classes.column} />
          <div className={classes.column} />
        </div>
      </Section>
    </QuestionPage>
  );
};

const Grid1 = memo(Grid1Component);
Grid1.displayName = 'Grid1';
export default Grid1;
