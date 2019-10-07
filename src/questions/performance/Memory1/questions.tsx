import React from 'react';
import { QuestionInfo } from 'types/app-common';
import Code from 'components/Code';

const questions: QuestionInfo[] = [
  {
    question: `How to get memory usage on browser?`,
    answer: (
      <div>
        <p>
          Use <code>window.performance.memory</code>. Currently, only Chrome
          supports
        </p>

        <Code language="tsx">
          {`const { totalJSHeapSize, jsHeapSizeLimit, usedJSHeapSize } = performance.memory;`}
        </Code>
      </div>
    ),
    references: [
      {
        name: `[stackoverflow] jQuery or javascript to find memory usage of page`,
        url: `https://stackoverflow.com/questions/2530228/jquery-or-javascript-to-find-memory-usage-of-page`,
      },
      {
        name: `[WebPlatform] performance.memory`,
        url: `https://webplatform.github.io/docs/apis/timing/properties/memory/`,
      },
    ],
  },
  {
    question: `How to get memory usage in NodeJS app?`,
    answer: (
      <div>
        <p>
          Use <code>process.memoryUsage()</code>
        </p>

        <Code language="typescript">{`const { external, heapTotal, heapUsed, rss } = process.memoryUsage();`}</Code>
      </div>
    ),
    references: [
      {
        name: `[stackoverflow] How to monitor the memory usage of Node.js?`,
        url: `https://stackoverflow.com/questions/20018588/how-to-monitor-the-memory-usage-of-node-js`,
      },
      {
        name: `[Node.js] Process`,
        url: `https://nodejs.org/api/process.html#process_process_memoryusage`,
      },
    ],
  },
];

export default questions;
