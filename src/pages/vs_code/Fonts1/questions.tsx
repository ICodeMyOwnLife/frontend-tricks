import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to use FiraCode font in VS Code?`,
    answer: (
      <div>
        <p>
          Download and install the{' '}
          <a href="https://github.com/tonsky/FiraCode/tree/master/distr/ttf">
            Fira Code ttf fonts
          </a>
        </p>
        <p>
          Update VS Code <code>settings.json</code>
        </p>
        <CodeViewer language="json">
          {`{
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true
}`}
        </CodeViewer>
        <p>To enable stylistic sets:</p>
        <CodeViewer language="json">
          {`{
  "editor.fontLigatures": "'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06', 'ss07', 'ss08', 'zero', 'onum'"
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[GitHub] FiraCode:Installing`,
        url: `https://github.com/tonsky/FiraCode/wiki/Installing`,
      },
      {
        name: `[GitHub] FiraCode:VS Code Instructions`,
        url: `https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions`,
      },
      {
        name: `[GitHub] FiraCode:How to enable stylistic sets`,
        url: `https://github.com/tonsky/FiraCode/wiki/How-to-enable-stylistic-sets`,
      },
    ],
  },
  {
    question: `How to use FiraCode font in browser?`,
    answer: (
      <div>
        <p>
          Download{' '}
          <a href="https://github.com/tonsky/FiraCode/tree/master/distr">
            FiraCode font set (otf, ttf, woff, woff2)
          </a>
        </p>
        <p>Declare FiraCode font face</p>
        <CodeViewer language="css">
          {`
@font-face {
  font-family: Fira Code;
  src: 
      url('/vs_code/Fonts1/FiraCode-Medium.woff2') format('woff2'),
      url('/vs_code/Fonts1/FiraCode-Medium.woff') format('woff'),
      url('/vs_code/Fonts1/FiraCode-Medium.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}`}
        </CodeViewer>
        <p>Apply FiraCode, enable/disable ligatures and stylistic sets</p>
        <CodeViewer language="css">
          {`.Fonts1-firaText-259 {
  text-align: center;
  font-family: Fira Code;
  line-height: 24px;
  white-space: pre;
}

.Fonts1-ligature-260 {
  text-rendering: optimizeLegibility;
  font-feature-settings: "liga", "calt", "ss01", "ss02", "ss03", "ss04", "ss05", "ss06", "ss07", "ss08", "zero", "onum";
  -web-kit-font-smoothing: antialiased;
  -moz-font-feature-settings: "liga", "calt", "ss01", "ss02", "ss03", "ss04", "ss05", "ss06", "ss07", "ss08", "zero", "onum";
  -webkit-font-feature-settings: "liga", "calt", "ss01", "ss02", "ss03", "ss04", "ss05", "ss06", "ss07", "ss08", "zero", "onum";
}

.Fonts1-nonLigature-261 {
  font-feature-settings: "liga" off, "calt" off;
  -moz-font-feature-settings: "liga" off, "calt" off;
  -webkit-font-feature-settings: "liga" off, "calt" off;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[GitHub] FiraCode:ChromeOS Terminal`,
        url: `https://github.com/tonsky/FiraCode/wiki/ChromeOS-Terminal`,
      },
      {
        name: `[GitHub] FiraCode:How to enable stylistic sets`,
        url: `https://github.com/tonsky/FiraCode/wiki/How-to-enable-stylistic-sets`,
      },
    ],
  },
];

export default questions;
