import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const BundleSize1Component: FC = () => (
  <QuestionPage questions={questions} title="Bundle Size 1" />
);

const BundleSize1 = memo(BundleSize1Component);
export default BundleSize1;
