import React from 'react';
import CodeViewer from 'components/CodeViewer';
import { QuestionInfo } from 'types/app-common';

const questions: QuestionInfo[] = [
  {
    question: `How to lint a TypeScript React app?`,
    answer: (
      <div>
        <p>
          Install the linter, TypeScript parser, plugins, configs and formatters
        </p>
        <CodeViewer language="bash">
          yarn add eslint eslint-config-airbnb eslint-config-prettier
          eslint-config-react eslint-plugin-import eslint-plugin-jsx-a11y
          eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
          prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
        </CodeViewer>

        <p>
          Add <code>.eslintrc</code> in the root project directory
        </p>

        <CodeViewer language="json">
          {`{
  "parser": "@typescript-eslint/parser",
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
    "mocha": true,
    "jest": true
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "import",
    "prettier",
    "react-hooks"
  ],
  "extends": [
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "globals": {
    "document": true,
    "window": true
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "arrow-body-style": "warn",
    "no-sparse-arrays": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/no-onchange": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "import/no-unresolved": "off",
    "prettier/prettier": [
      "warn",
      { "singleQuote": true, "trailingComma": "all" }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".tsx"]
      }
    ],
    "react/jsx-wrap-multilines": ["error", { "prop": "ignore" }],
    "no-plusplus": ["warn", { "allowForLoopAfterthoughts": true }]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}`}
        </CodeViewer>

        <p>
          Add <code>.eslintignore</code> in the root project directory
        </p>

        <CodeViewer language="bash">
          {`**/*.test.ts
**/*.test.tsx
**/*.min.js
**/*.min.jsx
**/*.d.ts
src/serviceWorker.ts`}
        </CodeViewer>

        <p>
          Add <code>.prettierrc</code> in the root project directory
        </p>

        <CodeViewer language="json">{`{ "singleQuote": true, "trailingComma": "all" }`}</CodeViewer>

        <p>
          Add <code>.prettierignore</code> in the root project directory
        </p>

        <CodeViewer language="bash">
          {`node_modules
build
dist
res
coverage`}
        </CodeViewer>

        <p>
          Update or add <code>.vscode/settings.json</code>
        </p>

        <CodeViewer language="json">
          {`{
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ],
  "eslint.autoFixOnSave": true
}`}
        </CodeViewer>
      </div>
    ),
  },
];

export default questions;
