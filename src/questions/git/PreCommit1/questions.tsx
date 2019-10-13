import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to add pre-commit hooks for linting TypeScript?`,
    answer: (
      <div>
        <p>
          Install <code>husky</code> and <code>lint-staged</code> packages:
        </p>

        <CodeViewer language="bash">yarn add husky lint-staged</CodeViewer>

        <p>
          Update <code>package.json</code>
        </p>

        <CodeViewer language="json">
          {`{
  "script": {
    "lint": "eslint 'src/**/*.{ts,tsx}' --max-warnings 0",
    "lint:fix": "yarn lint --fix",
    "type-check": "tsc"
  },
  "husky": {
    "hooks": {
      "pre-commit": "yarn type-check && lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["yarn lint:fix", "git add"],
    "{*.{json,md}}": ["prettier --write", "git add"]
  }
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `Configuring Pre-commit Hooks for Prettier and Linting on a TypeScript Project`,
        url: `https://justinnoel.dev/2019/07/13/configuring-precommit-hooks-for-eslint-and-prettier/`,
      },
      {
        name: `Using lint-staged, husky, and pre-commit hooks to fail fast and early`,
        url: `https://codeburst.io/continuous-integration-lint-staged-husky-pre-commit-hook-test-setup-47f8172924fc`,
      },
      {
        name: `Setting up a GatsbyJS starter with TypeScript, ESLint, Prettier and pre-commit hooks`,
        url: `https://www.arden.nl/setting-up-a-gatsby-js-starter-with-type-script-es-lint-prettier-and-pre-commit-hooks`,
      },
    ],
    todos: ['Add pre-commit hooks for linting CSS/SCSS'],
  },
  {
    question: `How to add pre-commit hooks for checking and fixing?`,
    answer: (
      <div>
        <p>
          Install <code>pre-commit</code>: Make sure <code>python</code> is
          installed then
        </p>

        <CodeViewer language="bash">
          curl https://pre-commit.com/install-local.py | python -
        </CodeViewer>

        <p>
          Add <code>.pre-commit-config.yaml</code> to root project directory
        </p>

        <CodeViewer language="yaml">
          {`# See https://pre-commit.com for more information
# See https://pre-commit.com/hooks.html for more hooks
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v2.0.0
    hooks:
      - id: check-case-conflict
      - id: check-json
      - id: check-yaml
      - id: check-added-large-files
      - id: end-of-file-fixer
      - id: trailing-whitespace
        exclude: \\.(tsx|jsx)\\.snap$
  - repo: https://github.com/pre-commit/mirrors-eslint
    rev: v6.4.0
    hooks:
      - id: eslint
        additional_dependencies:
          - eslint@^6.4.0
          - eslint-config-airbnb@^18.0.0
          - eslint-config-prettier@^6.0.0
          - eslint-config-react@^1.1.7
          - eslint-import-resolver-webpack@^0.11.1
          - eslint-plugin-import@^2.18.2
          - eslint-plugin-jsx-a11y@^6.2.3
          - eslint-plugin-prettier@^3.1.0
          - eslint-plugin-react@^7.14.3
          - eslint-plugin-react-hooks@^1.7.0
          - prettier@^1.18.2
          - '@typescript-eslint/eslint-plugin@^2.3.0'
          - '@typescript-eslint/parser@^2.3.0'
        args:
          - --fix
          - --quiet
        files: src.+(\\.ts|\\.tsx|\\.js|\\.jsx)$
        exclude: \\.test\\.(ts|tsx|js|jsx)$`}
        </CodeViewer>

        <p>Install hooks</p>

        <CodeViewer language="bash">pre-commit install</CodeViewer>
      </div>
    ),
    references: [
      {
        name: `pre-commit`,
        url: `https://pre-commit.com/`,
      },
      {
        name: `[pre-commit] Supported hooks`,
        url: `https://pre-commit.com/hooks.html`,
      },
    ],
  },
];

export default questions;
