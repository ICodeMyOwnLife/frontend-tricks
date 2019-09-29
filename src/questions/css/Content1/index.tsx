import React, { FC, memo } from 'react';
import { Card, CardContent, Link } from '@material-ui/core';
import clsx from 'clsx';
import Question from 'components/Question';
import questions from './questions';
import useStyles from './styles';

export const Content1Component: FC = () => {
  const classes = useStyles();

  return (
    <Question title="Content 1" questions={questions}>
      <Card className={clsx(classes.Section, classes.SectionLink)}>
        <CardContent />
      </Card>
    </Question>
  );
};

const Content1 = memo(Content1Component);
Content1.displayName = 'Content1';
export default Content1;
