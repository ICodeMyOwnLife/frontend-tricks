import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';

export const Deployment1Component: FC = () => (
  <QuestionPage title="Deployment 1" questions={questions} />
);

const Deployment1 = memo(Deployment1Component);
export default Deployment1;
