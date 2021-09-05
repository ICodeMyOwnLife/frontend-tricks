import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const SinglePageApp1Component: FC = () => (
  <QuestionPage title="Single Page App" questions={questions} />
);

const SinglePageApp1 = memo(SinglePageApp1Component);
SinglePageApp1.displayName = 'SinglePageApp1';
export default SinglePageApp1;
