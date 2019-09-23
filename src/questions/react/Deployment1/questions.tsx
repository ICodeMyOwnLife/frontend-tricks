/* eslint-disable react/no-unescaped-entities */
import { QuestionInfo } from 'components/Question';
import React from 'react';
import Code from 'components/Code';
import ghPagesSrc from './gh-pages.png';

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
  {
    question: `How to setup an Express server for React app?`,
    answer: (
      <Code language="typescript">
        {`import { join, resolve } from 'path';
import express from 'express';
import morgan from 'morgan';

const DIR_BUILD = resolve('../build');
const app = express();

app.use(morgan('common'));
app.use(express.static(DIR_BUILD));

// serve index.html for any unknown paths
app.get('/*', (_req, res) => {
  res.sendFile(join(DIR_BUILD, 'index.html'));
});

app.listen(Number(process.env.PORT) || 4000);`}
      </Code>
    ),
    references: [
      {
        name: `[Create React App] Deployment`,
        url: `https://create-react-app.dev/docs/deployment#serving-apps-with-client-side-routing`,
      },
    ],
  },
  {
    question: `How to deploy to GitHub Pages?`,
    answer: (
      <div>
        <p>
          (Refer to <code>github-pages</code> branch)
        </p>

        <p>
          Install <code>gh-pages</code>
        </p>

        <Code language="bash">yarn add gh-pages</Code>

        <p>
          Add <code>homepage</code> entry and scripts to{' '}
          <code>package.json</code>. <b>Note:</b> The <code>homepage</code>{' '}
          entry is very important for GitHub pages to work properly, but it may
          cause routing problems with other deployment methods.
        </p>

        <Code language="json">
          {`{
  "homepage": "https://icodemyownlife.github.io/frontend-tricks/",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
  }
}`}
        </Code>

        <p>
          Run <code>deploy</code> script
        </p>

        <Code language="bash">yarn deploy</Code>

        <p>
          Make sure GitHub Pages option in your GitHub project settings is set
          to use the <code>gh-pages</code> branch
        </p>

        <p>
          <img src={ghPagesSrc} alt="gh-pages" width={400} />
        </p>
      </div>
    ),
    references: [
      {
        name: `[Create React App] Deployment`,
        url: `https://create-react-app.dev/docs/deployment#github-pages-https-pagesgithubcom`,
      },
      {
        name: `[Medium] So you want to host your Single Page React App on GitHub Pages?`,
        url: `https://itnext.io/so-you-want-to-host-your-single-age-react-app-on-github-pages-a826ab01e48`,
      },

      {
        name: `[Medium] Deploying React Applications to Github Pages`,
        url: `https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a`,
      },

      {
        name: `[GitHub] Deploying a React App* to GitHub Pages`,
        url: `https://github.com/gitname/react-gh-pages`,
      },

      {
        name: `How to deploy a create react app to Github pages`,
        url: `https://reactgo.com/deploy-react-app-github-pages/`,
      },

      {
        name: `[Medium] React-router problem with gh-pages`,
        url: `https://medium.com/@Dragonza/react-router-problem-with-gh-pages-c93a5e243819`,
      },

      {
        name: `[GitHub] Gh-pages deployment problems with react-router`,
        url: `https://github.com/facebook/create-react-app/issues/1765`,
      },
    ],
  },
];

export default questions;
