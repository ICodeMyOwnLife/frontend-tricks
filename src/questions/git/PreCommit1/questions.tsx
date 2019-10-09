import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to add pre-commit hooks for Git?`,
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
