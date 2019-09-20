import React, { FC, memo } from 'react';
import Question from 'components/Question';
import questions from './questions';

export const TypeScript1Component: FC = () => (
  <Question title="TypeScript 1" questions={questions} />
);

const TypeScript1 = memo(TypeScript1Component);
export default TypeScript1;
