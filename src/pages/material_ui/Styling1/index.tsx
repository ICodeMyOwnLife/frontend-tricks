import React, { FC, memo } from 'react';
import { ThemeProvider } from '@material-ui/core';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import MyGroup from './components/MyGroup';
import theme from './theme';
import questions from './questions';

export const Styling1Component: FC = () => (
  <QuestionPage questions={questions} title="Material UI: Styling 1">
    <Section title="Custom Class Name Generator">
      <MyGroup />
    </Section>

    <Section title="Custom Theme Override">
      <ThemeProvider theme={theme}>
        <MyGroup />
      </ThemeProvider>
    </Section>
  </QuestionPage>
);

const Styling1 = memo(Styling1Component);
Styling1.displayName = 'Styling1';
export default Styling1;
