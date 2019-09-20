import React from 'react';
import { QuestionInfo } from 'components/Question';
import Code from 'components/Code';

const questions: QuestionInfo[] = [
  {
    question: `How to analyze the bundle size?`,
    answer: (
      <div>
        <p>
          Install <code>source-map-explorer</code>
        </p>

        <Code language="bash">yarn add source-map-explorer</Code>

        <p>
          Add <code>analyze</code> script to <code>package.json</code>
        </p>

        <Code language="json">
          {`{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "analyze": "source-map-explorer 'build/static/js/*.js'"
  }
}`}
        </Code>

        <p>Build and analyze the bundle</p>

        <Code language="bash">
          {`yarn build
yarn analyze`}
        </Code>
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
