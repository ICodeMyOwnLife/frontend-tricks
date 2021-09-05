import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to increase heap memory of an NodeJS app?`,
    answer: (
      <div>
        <p>
          Set max heap usage using <code>NODE_OPTIONS</code> environment
          variable
        </p>

        <CodeViewer language="bash">
          NODE_OPTIONS=--max_old_space_size=4096 node app.js
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[Stack Overflow] FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - process out of memory`,
        url: `https://stackoverflow.com/questions/26094420/fatal-error-call-and-retry-last-allocation-failed-process-out-of-memory/`,
      },
      {
        name: `[Stack Overflow] NodeJS recommended max-old-space-size`,
        url: `https://stackoverflow.com/questions/48387040/nodejs-recommended-max-old-space-size`,
      },
      {
        name: `[Node.js] NODE_OPTIONS`,
        url: `https://nodejs.org/api/cli.html#cli_node_options_options`,
      },
    ],
  },
  {
    question: `How to get used memory size in NodeJS app?`,
    answer: <div />,
  },
];

export default questions;
