/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo, ReactNode } from 'react';
import { Box, Typography, List } from '@material-ui/core';
import QuestionItem from 'components/QuestionItem';
import { QuestionInfo } from 'types/app-common';
import useStyles from './styles';

export const QuestionPageImpl: FC<QuestionPageProps> = ({
  title,
  questions,
  children,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.Container}>
      <Typography variant="h2">{title}</Typography>
      <Box className={classes.Content}>{children}</Box>
      <Box className={classes.Questions}>
        <Typography variant="h3">Questions</Typography>
        <Box>
          <List>
            {questions.map((questionInfo, index) => (
              <QuestionItem key={index} index={index + 1} {...questionInfo} />
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

const QuestionPage = memo(QuestionPageImpl);
QuestionPage.displayName = 'QuestionPage';
export default QuestionPage;

export interface QuestionPageProps {
  title: string;
  questions: QuestionInfo[];
  children?: ReactNode;
}
