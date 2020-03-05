import React from 'react';
import CodeViewer from 'components/CodeViewer';
import { QuestionInfo } from 'types/app-common';

const questions: QuestionInfo[] = [
  {
    question: `How to format commit messages according to a standard?`,
    answer: (
      <div>
        <p>
          Use <code>commitizen</code>
        </p>

        <CodeViewer language="bash">
          {`yarn add -D commitizen
npx commitizen init cz-conventional-changelog --yarn --dev --exact`}
        </CodeViewer>

        <p>
          Add this script to <code>package.json</code>
        </p>

        <CodeViewer language="json">
          {`"scripts":{
  "commit": "git-cz"
}`}
        </CodeViewer>

        <p>
          Run <code>yarn commit</code> instead of <code>git commit</code> every
          time committing
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
          Add these entries to husky hooks in <code>package.json</code>
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
