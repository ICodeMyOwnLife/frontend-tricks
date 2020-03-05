import React from 'react';
import CodeViewer from 'components/CodeViewer';
import { QuestionInfo } from 'types/app-common';

const questions: QuestionInfo[] = [
  {
    question: `How to automate bumping version, releasing to GitHub/GitLab and publish to NPM`,
    answer: (
      <div>
        <p>
          Use <code>release-it</code>
        </p>

        <CodeViewer language="bash">yarn add -D release-it</CodeViewer>

        <p>
          Add configs. The default config file is <code>.release-it.json</code>.
        </p>

        <CodeViewer language="json">
          {`{
  "git": {
    "commitMessage": "chore(release): release $\{version}",
    "pushRepo": "origin"
  },
  "github": {
    "release": true,
    "origin": "https://github.com"
  },
  "npm": {
    "publish": true
  }
}`}
        </CodeViewer>

        <p>
          Add <code>release</code> script to <code>package.json</code>
        </p>

        <CodeViewer language="json">
          {`"scripts": {
  "release": "release-it --ci"
}`}
        </CodeViewer>

        <p>
          Run <code>yarn release</code> after commit to bump version, release
          and publish
        </p>
      </div>
    ),
    references: [
      {
        name: `[GitHub] release-it`,
        url: `https://github.com/release-it/release-it`,
      },
      {
        name: `[GitHub] release-it.json`,
        url: `https://github.com/release-it/release-it/blob/master/conf/release-it.json`,
      },
    ],
  },
];

export default questions;
