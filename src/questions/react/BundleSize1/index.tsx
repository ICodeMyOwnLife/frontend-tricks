import React, { FC, memo } from 'react';
import Question from 'components/Question';
import questions from './questions';

export const BundleSize1Component: FC = () => (
  <Question title="Bundle Size 1" questions={questions} />
);

const BundleSize1 = memo(BundleSize1Component);
export default BundleSize1;
