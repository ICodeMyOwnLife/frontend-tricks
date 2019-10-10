import React, { FC, memo, useRef, useState } from 'react';
import QuestionPage from 'components/QuestionPage';
import { Button } from '@material-ui/core';
import useForceUpdate from 'hooks/useForceUpdate';
import questions from './questions';
import Editor from './Editor';
import useStyles from './styles';
import {
  useUpdateDisplay,
  useQueryHandler,
  useShowDisplayEffect,
  useRefresh,
} from './hooks';
import Result from './Result';
import QueryForm from './QueryForm';

const sampleHtml = `
<div id="1" class="a" name="A">
  <section id="2" class="b" name="B">
    <nav id="3" class="a" name="C"></nav>
  </section>
  <nav id="4" class="b" name="C">
    <div id="7" class="c" name="C"></div>
  </nav>
  <div id="5" class="d" name="B">
    <section id="6" class="b" name="A">
      <div id="8" class="c" name="C">
        <nav id="9" class="b" name="B"></nav>
      </div>
    </section>
  </div>
</div>`;

export const Query1Component: FC = () => {
  const classes = useStyles();
  const displayRef = useRef<HTMLDivElement>(null);
  const [html, setHtml] = useState(sampleHtml);
  const [queryResult, setQueryResult] = useState<any>();
  const updateDisplay = useUpdateDisplay({ html, displayRef });
  const handleQuery = useQueryHandler({
    displayRef,
    setQueryResult,
  });
  const [updateToken, forceUpdate] = useForceUpdate();
  const refresh = useRefresh({ queryResult, forceUpdate });
  useShowDisplayEffect({ displayRef, sampleHtml });

  return (
    <QuestionPage title="Query 1" questions={questions}>
      <div className={classes.Display} ref={displayRef} />
      <Editor html={html} setHtml={setHtml} updateDisplay={updateDisplay} />
      <QueryForm onQuery={handleQuery} />
      <Result result={queryResult} updateToken={updateToken} />
      <Button
        className={classes.Button}
        variant="outlined"
        color="default"
        onClick={refresh}
      >
        Refresh
      </Button>
    </QuestionPage>
  );
};

document.getElementsByTagName('a');
document.getElementsByClassName('.a');
document.getElementsByName('a');

const Query1 = memo(Query1Component);
Query1.displayName = 'Query1';
export default Query1;
