import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import ReCaptchaV3 from './ReCaptchaV3';
import questions from './questions';
import ReCaptchaCheckbox from './components/ReCaptchaCheckbox';
import { checkboxSiteKey } from './utils';

export const ReCaptcha1Component: FC = () => (
  <QuestionPage questions={questions} title="ReCAPTCHA">
    <Section title="ReCAPTCHA v3">
      <ReCaptchaV3 />
    </Section>
    <Section title="ReCAPTCHA v2 Widget">
      <ReCaptchaCheckbox
        id="1"
        onError={console.log}
        onExpired={() => console.log('Expired')}
        onVerify={console.log}
        sitekey={checkboxSiteKey}
        size="normal"
        theme="dark"
      />
    </Section>
  </QuestionPage>
);

const ReCaptcha1 = memo(ReCaptcha1Component);
ReCaptcha1.displayName = 'ReCaptcha1';
export default ReCaptcha1;
