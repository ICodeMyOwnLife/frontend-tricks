import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import ReCaptchaV3 from './ReCaptchaV3';
import questions from './questions';

export const ReCaptcha1Component: FC = () => (
  <QuestionPage questions={questions} title="ReCAPTCHA">
    <Section title="ReCAPTCHA v3">
      <ReCaptchaV3 />
    </Section>
  </QuestionPage>
);

const ReCaptcha1 = memo(ReCaptcha1Component);
ReCaptcha1.displayName = 'ReCaptcha1';
export default ReCaptcha1;
