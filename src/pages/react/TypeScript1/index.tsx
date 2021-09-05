import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const TypeScript1Component: FC = () => (
  <QuestionPage title="TypeScript 1" questions={questions} />
);

const TypeScript1 = memo(TypeScript1Component);
export default TypeScript1;
