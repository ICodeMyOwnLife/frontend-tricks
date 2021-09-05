import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const Console1Component: FC = () => (
  <QuestionPage questions={questions} title="" />
);

const Console1 = memo(Console1Component);
Console1.displayName = 'Console1';
export default Console1;
