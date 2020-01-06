/* eslint-disable react/no-array-index-key */
import React, { FC, memo, ReactNode } from 'react';
import { Box, Typography, List } from '@material-ui/core';
import QuestionItem from 'components/QuestionItem';
import { QuestionInfo } from 'types/app-common';
import PageLayout from 'components/PageLayout';
import useStyles from './styles';

export const QuestionPageComponent: FC<QuestionPageProps> = ({
  questions,
  children,
  ...props
}) => {
  const classes = useStyles();

  return (
    <PageLayout {...props}>
      {children}
      <Box className={classes.questions}>
        <Typography variant="h4">Questions</Typography>
        <Box>
          <List>
            {questions.map((questionInfo, index) => (
              <QuestionItem key={index} index={index + 1} {...questionInfo} />
            ))}
          </List>
        </Box>
      </Box>
    </PageLayout>
  );
};

const QuestionPage = memo(QuestionPageComponent);
QuestionPage.displayName = 'QuestionPage';
export default QuestionPage;

export interface QuestionPageProps {
  className?: string;
  title: string;
  questions: QuestionInfo[];
  children?: ReactNode;
}
