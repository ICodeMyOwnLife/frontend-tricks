import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to get all of the capturing groups for all regex matches?`,
    answer: (
      <div>
        <p>
          Use <code>String.prototype.matchAll</code>
        </p>
        <CodeViewer language="typescript">
          {`const regex = new RegExp(pattern, flags);
return Array.from(string.matchAll(regex)).map<MatchResult>(matchArray => {
  const { index, input, groups } = matchArray;
  return { matchArray, index, input, groups };
});`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] String.prototype.matchAll()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll`,
      },
      {
        name: `[developers.google.com] Better match results with String.prototype.matchAll()`,
        url: `https://developers.google.com/web/updates/2019/02/string-matchall`,
      },
    ],
  },
];

export default questions;
