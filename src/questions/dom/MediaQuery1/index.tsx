import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const MediaQuery1Component: FC = () => (
  <QuestionPage title="Media Query 1" questions={questions} />
);

const MediaQuery1 = memo(MediaQuery1Component);
MediaQuery1.displayName = 'MediaQuery1';
export default MediaQuery1;
