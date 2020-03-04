import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to format commit messages according to a standard?`,
    answer: (
      <div>
        <p>Use Commitizen</p>
        <CodeViewer language="bash">
          {`npm i -g commitizen
commitizen init cz-conventional-changelog --yarn --dev --exact`}
        </CodeViewer>
        <p>
          Run <code>git cz</code> or <code>npx git-cz</code> instead of{' '}
          <code>git commit</code> when committing
        </p>
        <p>
          Alternatively, incorporate Commitizen into the existing git commit
          workflow by adding this entry to husky hooks in{' '}
          <code>package.json</code>
        </p>
        <CodeViewer language="json">
          {`"husky": {
  "hooks": {
    "prepare-commit-msg": "exec < /dev/tty && npx git-cz --hook || true"
  }
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[GitHub] Commitizen`,
        url: `https://github.com/commitizen/cz-cli`,
      },
    ],
  },
];

export default questions;
