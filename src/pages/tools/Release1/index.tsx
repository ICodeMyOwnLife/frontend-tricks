import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const Release1Component: FC = () => (
  <QuestionPage questions={questions} title="Release 1" />
);

const Release1 = memo(Release1Component);
Release1.displayName = 'Release1';
export default Release1;
