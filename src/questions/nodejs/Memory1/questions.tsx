import React from 'react';
import { QuestionInfo } from 'components/Question';
import Code from 'components/Code';

const questions: QuestionInfo[] = [
  {
    question: `How to increase heap memory of an Node app?`,
    answer: (
      <div>
        <p>
          Set max heap size using <code>NODE_OPTIONS</code> environment variable
        </p>

        <Code language="bash">
          NODE_OPTIONS=--max_old_space_size=4096 node app.js
        </Code>
      </div>
    ),
    references: [
      {
        name: `[stackoverflow] FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - process out of memory`,
        url: `https://stackoverflow.com/questions/26094420/fatal-error-call-and-retry-last-allocation-failed-process-out-of-memory/`,
      },
      {
        name: `[stackoverflow] NodeJS recommended max-old-space-size`,
        url: `https://stackoverflow.com/questions/48387040/nodejs-recommended-max-old-space-size`,
      },
      {
        name: `[Node.js] NODE_OPTIONS`,
        url: `https://nodejs.org/api/cli.html#cli_node_options_options`,
      },
    ],
  },
];

export default questions;
