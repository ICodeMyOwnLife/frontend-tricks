import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';

export const Layout1Component: FC = () => (
  <QuestionPage questions={questions} title="Layout 1">
    <Section title="Diagonal Layout">
      <></>
    </Section>
  </QuestionPage>
);

const Layout1 = memo(Layout1Component);
Layout1.displayName = 'Layout1';
export default Layout1;
