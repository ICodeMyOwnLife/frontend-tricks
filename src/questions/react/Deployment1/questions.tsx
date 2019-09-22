import { QuestionInfo } from 'components/Question';
import React from 'react';
import Code from 'components/Code';

const questions: QuestionInfo[] = [
  {
    question: `How to setup a static server for React app?`,
    answer: (
      <div>
        <p>
          In <code>NodeJS</code> environment, use <code>serve</code>:
        </p>

        <Code language="bash">
          {`npm install -g serve
serve -s build -l 4000`}
        </Code>
      </div>
    ),
    references: [
      {
        name: `[Create React App] Deployment`,
        url: `https://create-react-app.dev/docs/deployment#static-server`,
      },
      {
        name: `[GitHub] serve`,
        url: `https://github.com/zeit/serve`,
      },
      {
        name: `Serve 7: Middleware`,
        url: `https://zeit.co/blog/serve-7`,
      },
    ],
  },
];

export default questions;
