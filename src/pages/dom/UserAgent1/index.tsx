import React, { FC, memo } from 'react';
import { UAParser } from 'ua-parser-js';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import questions from './questions';
import UserAgent from './UserAgent';
import { useBackendUaResult } from './utils';

const parser = new UAParser(window.navigator.userAgent);
const frontendUaResult = parser.getResult();

export const UserAgent1Component: FC = () => {
  const { result: backendUaResult } = useBackendUaResult();
  return (
    <QuestionPage title="User Agent 1" questions={questions}>
      <Section title="Frontend Side">
        <UserAgent uaResult={frontendUaResult} />
      </Section>
      <Section title="Backend Side">
        <UserAgent uaResult={backendUaResult} />
      </Section>
    </QuestionPage>
  );
};

const UserAgent1 = memo(UserAgent1Component);
UserAgent1.displayName = 'UserAgent1';
export default UserAgent1;
