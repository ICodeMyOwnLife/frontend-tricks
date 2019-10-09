import React, { FC, memo, useState } from 'react';
import { Button } from '@material-ui/core';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import useBoolean from 'hooks/useBoolean';
import Playground from './Playground';
import questions from './questions';
import { useGetElementByIdPlayground } from './hooks';

export const Query1Component: FC = () => {
  const [playgroundIsOpen, openPlayground, closePlayground] = useBoolean(false);
  const [queryHandler, setQueryHandler] = useState<
    TypedFunction<[HTMLDivElement, string]>
  >(() => {});
  const openGetElementByIdPlayground = useGetElementByIdPlayground({
    openPlayground,
    setQueryHandler,
  });

  return (
    <QuestionPage title="Query 1" questions={questions}>
      <Section title="getElementById">
        <Button onClick={openGetElementByIdPlayground}>Open Playground</Button>
      </Section>
      <Playground
        open={playgroundIsOpen}
        onClose={closePlayground}
        onQuery={queryHandler}
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
