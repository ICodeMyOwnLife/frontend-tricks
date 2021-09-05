import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import VideoPlay1 from './VideoPlay1';
import VideoPlay2 from './VideoPlay2';
import questions from './questions';

export const PageVisibility1Component: FC = () => (
  <QuestionPage questions={questions} title="Page Visibility 1">
    <Section title="Visibility ">
      <VideoPlay1 />
    </Section>

    <Section title="Visibility State">
      <VideoPlay2 />
    </Section>
  </QuestionPage>
);

const PageVisibility1 = memo(PageVisibility1Component);
PageVisibility1.displayName = 'PageVisibility1';
export default PageVisibility1;
