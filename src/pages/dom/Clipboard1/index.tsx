import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';
import ImageSection from './ImageSection';

export const Clipboard1Component: FC = () => (
  <QuestionPage title="Clipboard 1" questions={questions}>
    <ImageSection />
  </QuestionPage>
);

const Clipboard1 = memo(Clipboard1Component);
Clipboard1.displayName = 'Clipboard1';
export default Clipboard1;
