import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to apply static code analysis?`,
    answer: (
      <div>
        <p>
          Use <b>SonarQube</b>.{' '}
        </p>
        <p>
          <a href="https://docs.sonarqube.org/latest/setup/get-started-2-minutes/">
            Install SonarQube
          </a>
        </p>
        <p>
          <a href="https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/">
            Install SonarScanner
          </a>
        </p>
        <p>
          Add <code>sonar-project.properties</code> in the root directory of the
          project
        </p>
        <CodeViewer language="yaml">
          sonar.projectKey=frontend-tricks
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[SonarQube] Documentation`,
        url: `https://docs.sonarqube.org/latest/`,
      },
      {
        name: `[Medium] Set up SonarQube for JavaScript Application`,
        url: `https://medium.com/@deeksha.sharma25/set-up-sonarqube-for-javascript-application-c0f605146998`,
      },
    ],
  },
];

export default questions;
