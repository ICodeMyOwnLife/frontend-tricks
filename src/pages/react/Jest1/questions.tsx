import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to config Jest to fail if test coverage does not reach a threshold?`,
    answer: (
      <div>
        <p>
          Add Jest <code>coverageThreshold</code> config in{' '}
          <code>package.json</code>
        </p>

        <CodeViewer language="json">
          {`{
  "jest": {
    "coverageThreshold": {
      "global": {
        "branches": 50,
        "functions": 50,
        "lines": 50,
        "statements": 50
      },
      "./src/components/": {
        "branches": 40,
        "statements": 40
      },
      "./src/reducers/**/*.js": {
        "statements": 90
      },
      "./src/api/very-important-module.js": {
        "branches": 100,
        "functions": 100,
        "lines": 100,
        "statements": 100
      }
    }
  }
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[JEST] Configuring Jest`,
        url: `https://jestjs.io/docs/en/configuration#coveragethreshold-object`,
      },
    ],
  },
  {
    question: `How to print memory usage after each test?`,
    answer: (
      <div>
        <p>
          Use <code>--logHeapUsage</code> combined with <code>--runInBand</code>{' '}
          (optional)
        </p>

        <CodeViewer language="bash">jest --logHeapUsage --runInBand</CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[JEST] Jest CLI Options`,
        url: `https://deltice.github.io/jest/docs/en/cli.html#logheapusage`,
      },
    ],
  },
];

export default questions;
