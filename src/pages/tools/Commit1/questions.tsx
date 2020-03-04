import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to format commit messages according to a standard?`,
    answer: (
      <div>
        <p>
          Use <code>commitizen</code>
        </p>
        <CodeViewer language="bash">
          {`npm i -g commitizen
commitizen init cz-conventional-changelog --yarn --dev --exact`}
        </CodeViewer>
        <p>
          Run <code>git cz</code> or <code>npx git-cz</code> instead of{' '}
          <code>git commit</code> when committing
        </p>
        <p>
          Alternatively, incorporate <code>commitizen</code> and{' '}
          <code>commitlint</code> into the existing git commit workflow
        </p>
        <CodeViewer language="bash">{`yarn add -D husky @commitlint/{config-conventional,cli}`}</CodeViewer>
        <p>
          Add <code>commitlint.config.js</code>
        </p>
        <CodeViewer language="javascript">
          {`module.exports = {
  extends: ['@commitlint/config-conventional'],
};`}
        </CodeViewer>
        <p>
          A these entry to husky hooks in <code>package.json</code>
        </p>
        <CodeViewer language="json">
          {`"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
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
      {
        name: `[GitHub] commitlint`,
        url: `https://github.com/conventional-changelog/commitlint`,
      },
    ],
  },
];

export default questions;
