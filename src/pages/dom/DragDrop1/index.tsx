import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import BasicDragDrop from './components/BasicDragDrop';
import questions from './questions';

export const DragDrop1Component: FC = () => (
  <QuestionPage title="DOM: Drag Drop 1" questions={questions}>
    <Section title="Basic Drag Drop">
      <BasicDragDrop />
    </Section>
  </QuestionPage>
);

const DragDrop1 = memo(DragDrop1Component);
DragDrop1.displayName = 'DragDrop1';
export default DragDrop1;
