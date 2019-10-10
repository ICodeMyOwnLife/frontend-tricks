import React, { FC, memo } from 'react';
import { Button, Grid } from '@material-ui/core';
import QuestionPage from 'components/QuestionPage';
import useBoolean from 'hooks/useBoolean';
import Playground from './Playground';
import questions from './questions';
import {
  useGetElementById,
  useQueryHandler,
  useGetElementsByName,
} from './hooks';
import useStyles from './styles';

export const Query1Component: FC = () => {
  const classes = useStyles();
  const [playgroundIsOpen, openPlayground, closePlayground] = useBoolean(false);
  const { handleQuery, handleQueryRef } = useQueryHandler();
  const openGetElementByIdPlayground = useGetElementById({
    openPlayground,
    handleQueryRef,
  });
  const openGetElementsByNamePlayground = useGetElementsByName({
    openPlayground,
    handleQueryRef,
  });

  return (
    <QuestionPage title="Query 1" questions={questions}>
      <Grid container className={classes.Commands} spacing={3}>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={openGetElementByIdPlayground}
          >
            Document.getElementById()
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={openGetElementsByNamePlayground}
          >
            Document.getElementsByName()
          </Button>
        </Grid>
      </Grid>
      <Playground
        open={playgroundIsOpen}
        onClose={closePlayground}
        onQuery={handleQuery}
      />
    </QuestionPage>
  );
};

document.getElementsByTagName('a');
document.getElementsByClassName('.a');
document.getElementsByName('a');

const Query1 = memo(Query1Component);
Query1.displayName = 'Query1';
export default Query1;
