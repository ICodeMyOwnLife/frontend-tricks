import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to add ReCAPTCHA?`,
    answer: (
      <div>
        <p>Use Google ReCAPTCHA APIs or use a wrapper for React</p>
        <CodeViewer language="tsx">
          {`<ReCaptchaV3
  action="test_v3"
  onVerify={handleVerifyV3}
  ref={refV3}
  siteKey={v3SiteKey}
/>

<ReCaptchaCheckbox
  id="1"
  onExpired={handleExpiredCheckbox}
  onVerify={handleVerifyCheckbox}
  ref={refCheckbox}
  siteKey={checkboxSiteKey}
  size="normal"
  theme="dark"
/>`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[developers.google.com] ReCAPTCHA v3`,
        url: `https://developers.google.com/recaptcha/docs/v3`,
      },
      {
        name: `[developers.google.com] ReCAPTCHA v2`,
        url: `https://developers.google.com/recaptcha/docs/display`,
      },
      {
        name: `[GitHub] cb-react-recaptcha`,
        url: `https://github.com/ICodeMyOwnLife/cb-react-recaptcha`,
      },
    ],
  },
];

export default questions;
