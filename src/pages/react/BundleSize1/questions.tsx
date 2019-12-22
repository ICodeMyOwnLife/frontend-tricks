import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to analyze the bundle size?`,
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
    ],
  },
];

export default questions;
