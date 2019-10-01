import React, { FC, memo } from 'react';
import Question from 'components/Question';
import questions from './questions';

export const Upload1Component: FC = () => (
  <Question title="Upload 1" questions={questions} />
);

const Upload1 = memo(Upload1Component);
Upload1.displayName = 'Upload1';
export default Upload1;
