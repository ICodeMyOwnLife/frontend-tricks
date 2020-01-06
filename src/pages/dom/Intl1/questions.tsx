import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to create collators, objects that enable language sensitive string comparison?`,
    answer: (
      <div>
        <p>
          Use <code>Intl.Collator</code>
        </p>
        <CodeViewer language="typescript">
          {`const collator = new Intl.Collator(locale, {
  caseFirst,
  ignorePunctuation,
  localeMatcher,
  numeric,
  sensitivity,
  usage,
});
list.sort(collator.compare);`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] Intl.Collator`,
        url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator`,
      },
    ],
  },
];

export default questions;
