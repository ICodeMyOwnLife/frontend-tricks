/* eslint-disable react/no-unescaped-entities */
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
    "commitMessage": "chore(release): release $\{version}"
  }
}`}
        </CodeViewer>

        <p>
          To support GitHub release: assign GITHUB_TOKEN environment variable
          and add configs to <code>.release-it.json</code>
        </p>

        <CodeViewer language="bash">export GITHUB_TOKEN="abc..."</CodeViewer>

        <CodeViewer language="json">
          {`{
  "git": {
    "pushRepo": "origin"
  },
  "github": {
    "release": true,
    "origin": "https://github.com"
  }
}`}
        </CodeViewer>

        <p>
          To support GitLab release: assign GITLAB_TOKEN environment variable
          and add configs to <code>.release-it.json</code>
        </p>

        <CodeViewer language="bash">export GITLAB_TOKEN="abc..."</CodeViewer>

        <CodeViewer language="json">
          {`{
  "git": {
    "pushRepo": "gitlab"
  },
  "gitlab": {
    "release": true,
    "origin": "https://gitlab.com"
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
          To support NPM publish: add configs to <code>.release-it.json</code>
        </p>

        <CodeViewer language="json">
          {`{
  "npm": {
    "publish": true
  }
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
