import React, { FC, memo, useRef, useState } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';
import Editor from './Editor';
import useStyles from './styles';
import {
  useUpdateDisplay,
  useQueryHandler,
  useShowDisplayEffect,
} from './utils';
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
</div>
<div id="5" class="d" name="B">
  <section id="6" class="b" name="A">
    <div id="8" class="c" name="C">
      <nav id="9" class="b" name="B"></nav>
      <p id="childNode"></p>
    </div>
  </section>
</div>
<p id="10" class="d" name="C">Example Paragraph</p>
<span id="11" class="c" name="B">Hello World</span>
`;

export const SelectElements1Component: FC = () => {
  const classes = useStyles();
  const displayRef = useRef<HTMLDivElement>(null);
  const [html, setHtml] = useState(sampleHtml);
  const [queryResult, setQueryResult] = useState<any>();
  const updateDisplay = useUpdateDisplay({ displayRef, html, queryResult });
  const handleQuery = useQueryHandler({
    displayRef,
    setQueryResult,
  });
  useShowDisplayEffect({ displayRef, sampleHtml });

  return (
    <QuestionPage title="Select Elements 1" questions={questions}>
      <Section title="Select Elements">
        <div className={classes.display} ref={displayRef} />
        <Editor html={html} setHtml={setHtml} updateDisplay={updateDisplay} />
        <QueryForm onQuery={handleQuery} />
        <Result displayRef={displayRef} result={queryResult} />
      </Section>
    </QuestionPage>
  );
};

const SelectElements1 = memo(SelectElements1Component);
SelectElements1.displayName = 'SelectElements1';
export default SelectElements1;
