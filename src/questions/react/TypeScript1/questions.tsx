import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to create an React app with TypeScript support?`,
    answer: (
      <CodeViewer language="bash">npx create-react-app MyApp --typescript</CodeViewer>
    ),
  },
  {
    question: `How to add TypeScript to a current project?`,
    answer: (
      <div>
        <p>
          Install <code>typescript</code> and type definitions
        </p>

        <CodeViewer language="bash">
          yarn add typescript @types/node @types/react @types/react-dom
          @types/jest
        </CodeViewer>

        <p>
          Add <code>tsconfig.json</code> to the root project directory
        </p>

        <CodeViewer language="json">
          {`{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react",
    "baseUrl": "src",
    "downlevelIteration": true
  },
  "include": ["src"]
}`}
        </CodeViewer>

        <p>
          Rename <code>js</code> files into <code>ts</code> and <code>jsx</code>{' '}
          files into <code>tsx</code>
        </p>
      </div>
    ),
    references: [
      {
        name: `[Create React App] Adding TypeScript`,
        url: `https://create-react-app.dev/docs/adding-typescript`,
      },
    ],
  },
  {
    question: 'How to add apply ESLint to TypeScript project?',
    answer: (
      <div>
        <p>
          Install <code>prettier</code> and <code>eslint</code>, parser, configs
          and plugins for ESLint
        </p>

        <CodeViewer language="bash">
          yarn add prettier eslint @typescript-eslint/parser
          @typescript-eslint/eslint-plugin eslint-plugin-import
          eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react
          eslint-config-airbnb eslint-config-prettier eslint-config-react
          eslint-plugin-react-hooks
        </CodeViewer>

        <p>
          Add <code>.eslintrc</code> to the root project directory
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
        "extensions": [".jsx", ".tsx"]
      }
    ],
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
          Add <code>.prettierrc</code> to the root project directory
        </p>

        <CodeViewer language="json">{`{ "singleQuote": true, "trailingComma": "all" }`}</CodeViewer>

        <p>
          Add or update <code>.vscode/settings.json</code>
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
  "eslint.autoFixOnSave": true,
  "[javascript]":  {
    "editor.formatOnSave":  false,
  },
  "[javascriptreact]":  {
    "editor.formatOnSave":  false,
  },
  "[typescript]":  {
    "editor.formatOnSave":  false,
  },
  "[typescriptreact]":  {
    "editor.formatOnSave":  false,
  }
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[DEV] Using ESLint and Prettier in a TypeScript Project`,
        url: `https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb`,
      },
      {
        name: `[DEV] How To Set Up ESLint, TypeScript, Prettier with Create React App`,
        url: `https://dev.to/benweiser/how-to-set-up-eslint-typescript-prettier-with-create-react-app-3675`,
      },
      {
        name: `Linting Your React+Typescript Project With ESlint and Prettier`,
        url: `https://dorshinar.me/linting-your-react+typescript-project-with-eslint-and-prettier`,
      },
    ],
  },
];

export default questions;
