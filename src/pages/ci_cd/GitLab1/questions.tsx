/* eslint-disable no-useless-escape */
import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to add GitLab CI pipeline for a repo?`,
    answer: (
      <div>
        <p>
          Add <code>.gitlab-ci.yml</code> to root project directory.
        </p>

        <CodeViewer language="yaml">
          {`image: 'node:12.10.0'

stages:
  - test
  - build

cache:
  key: \${CI_COMMIT_REF_SLUG}
  paths:
    - node_modules/

before_script:
  - npm i -g yarn
  - yarn

test:
  stage: test
  script:
    - yarn test --coverage
  coverage: /All\\sfiles.*?\\s+(\\d+.\\d+)/

build:
  stage: build
  script:
    - yarn build`}
        </CodeViewer>

        <p>Push config to GitLab</p>

        <CodeViewer language="bash">
          {`git add .gitlab-ci.yml
git commit -m "Add .gitlab-ci.yml"
git push`}
        </CodeViewer>

        <p>
          Configure a Runner: Go to <b>Settings ➔ CI/CD</b> to set up your own
          Runner or use a Shared Runner
        </p>
      </div>
    ),
    references: [
      {
        name: `[GitLab] GitLab CI/CD Pipeline Configuration Reference`,
        url: `https://docs.gitlab.com/ee/ci/yaml/README.html`,
      },
      {
        name: `[Medium] React continuous deployment with gitlab-ci and S3`,
        url: `https://medium.com/@trevlinp/react-continuous-deployment-with-gitlab-ci-and-s3-46987e30dc54`,
      },
      {
        name: `[GitLab] Cache dependencies in GitLab CI/CD`,
        url: `https://docs.gitlab.com/ee/ci/caching/`,
      },
      {
        name: `[GitLab] Getting started with GitLab CI/CD`,
        url: `https://docs.gitlab.com/ee/ci/quick_start/README.html`,
      },
      {
        name: `[GitLab] GitLab CI Templates`,
        url: `https://gitlab.com/gitlab-org/gitlab-foss/tree/master/lib/gitlab/ci/templates`,
      },
      {
        name: `[GitLab] GitLab-examples`,
        url: `https://gitlab.com/gitlab-examples`,
      },
      {
        name: `[GitLab] Introduction to CI/CD with GitLab`,
        url: `https://docs.gitlab.com/ee/ci/introduction/index.html`,
      },
      {
        name: `[GitLab] GitLab CI/CD`,
        url: `https://docs.gitlab.com/ee/ci/`,
      },
      {
        name: `[GitLab] Test coverage regex does not work when output has color`,
        url: `https://gitlab.com/gitlab-org/gitlab-foss/issues/29642`,
      },
      {
        name: `[stackoverflow] Code coverage from Jest to stdout to GitLab`,
        url: `https://stackoverflow.com/questions/50798747/code-coverage-from-jest-to-stdout-to-gitlab`,
      },
    ],
  },
];

export default questions;
