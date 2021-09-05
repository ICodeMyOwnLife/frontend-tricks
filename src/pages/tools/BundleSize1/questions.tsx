/* eslint-disable react/no-unescaped-entities */
import CodeViewer from 'components/CodeViewer';
import { QuestionInfo } from 'types/app-common';

const questions: QuestionInfo[] = [
  {
    question: `How to analyze and debug code bloat?`,
    answer: (
      <div>
        <p>
          Install <code>source-map-explorer</code>
        </p>

        <CodeViewer language="bash">yarn add source-map-explorer</CodeViewer>

        <p>
          Add <code>analyze</code> script to <code>package.json</code>
        </p>

        <CodeViewer language="json">
          {`{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "analyze": "source-map-explorer 'build/static/js/*.js'"
  }
}`}
        </CodeViewer>

        <p>Build and analyze the bundle</p>

        <CodeViewer language="bash">
          {`yarn build
yarn analyze`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: '[Create React App] Analyzing the Bundle Size',
        url: `https://create-react-app.dev/docs/analyzing-the-bundle-size`,
      },
      {
        name: '[GitHub] source-map-explorer',
        url: `https://github.com/danvk/source-map-explorer`,
      },
    ],
  },
  {
    question: `How to check and limit the size or loading time?`,
    answer: (
      <div>
        <p>
          Use <code>size-limit</code>
        </p>

        <p>
          Alternatives:
          <ul>
            <li>
              <a href="https://github.com/siddharthkp/bundlesize">
                <code>bundlesize</code>
              </a>
            </li>
          </ul>
        </p>

        <p>
          1. For JS application (web app): install <code>size-limit</code> with{' '}
          <code>@size-limit/preset-app</code> preset then add{' '}
          <code>.size-limit.json</code>
        </p>

        <CodeViewer language="bash">
          yarn add -D size-limit @size-limit/preset-app
        </CodeViewer>

        <CodeViewer language="json">
          {`[
  {
    "path": "build/static/js/*.js",
    "limit": "150 s"
  }
]`}
        </CodeViewer>

        <p>
          2. For big JS libraries (more than 10 KB in size): install{' '}
          <code>size-limit</code> with <code>@size-limit/preset-big-lib</code>{' '}
          preset then add <code>.size-limit.json</code>
        </p>

        <CodeViewer language="bash">
          yarn add -D size-limit @size-limit/preset-big-lib
        </CodeViewer>

        <CodeViewer language="json">
          {`[
  {
    "path": "dist/index.js",
    "limit": "4 kb",
    "running": false
  },
  {
    "path": "dist/index.js",
    "limit": "125 ms"
  }
]`}
        </CodeViewer>

        <p>
          3. For small JS libraries (less than 10 KB in size): install{' '}
          <code>size-limit</code> with <code>@size-limit/preset-small-lib</code>{' '}
          preset then add <code>.size-limit.json</code>
        </p>

        <CodeViewer language="bash">
          yarn add -D size-limit @size-limit/preset-small-lib
        </CodeViewer>

        <CodeViewer language="json">
          {`[
  {
    "path": "dist/index.js",
    "limit": "1 kb"
  }
]`}
        </CodeViewer>

        <p>
          Add this script to <code>package.json</code> then run{' '}
          <code>yarn size</code> every time checking the size
        </p>

        <CodeViewer language="json">
          {`"scripts": {
  "size": "yarn build && size-limit",
},`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[GitHub] Size Limit`,
        url: `https://github.com/ai/size-limit`,
      },
      {
        name: `[GitHub] mobx/.size-limit.json`,
        url: `https://github.com/mobxjs/mobx/blob/master/.size-limit.json`,
      },
      {
        name: `[GitHub] autoprefixer/package.json`,
        url: `https://github.com/postcss/autoprefixer/blob/master/package.json`,
      },
      {
        name: `[GitHub] cb-hooks`,
        url: `https://github.com/ICodeMyOwnLife/cb-hooks/blob/master/package.json`,
      },
      {
        name: `[GitHub] cb-react-recaptcha`,
        url: `https://github.com/ICodeMyOwnLife/cb-react-recaptcha/blob/master/package.json`,
      },
    ],
  },
];

export default questions;
