/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to get user agent information such as browser, device and OS?`,
    answer: (
      <div>
        <p>
          On frontend side, use <code>window.navigator.userAgent</code>
        </p>

        <CodeViewer language="typescript">
          {`const parser = new UAParser(window.navigator.userAgent);
const frontendUaResult = parser.getResult();`}
        </CodeViewer>

        <p>
          On backend side, use <code>request.header('user-agent')</code>
        </p>

        <CodeViewer language="typescript">
          {`const parser = new UAParser(req.header("user-agent"));
const result = parser.getResult();`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] NavigatorID.userAgent`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent`,
      },
      {
        name: `[MDN] User-Agent`,
        url: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent`,
      },
      {
        name: `[MDN] https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent`,
        url: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent`,
      },
      {
        name: `[GitHub] UAParser.js`,
        url: `https://github.com/faisalman/ua-parser-js`,
      },
    ],
  },
];

export default questions;
