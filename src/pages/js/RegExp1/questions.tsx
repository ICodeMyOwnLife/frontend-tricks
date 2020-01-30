import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const positiveLookahead = {
  syntax: 'x(?=y)',
  example: `/\\w+(?=@\\w+\\.\\w+)/.exec('abc@def.com support@xyz.net')`,
};
const negativeLookahead = {
  syntax: 'x(?!y)',
  example: `/\\d{3}(?!B|C)/.exec('200A 723B 920C 736D')`,
};
const positiveLookbehind = {
  syntax: '(?<=y)x',
  example: `/(?<=[\\$€£¥])\\d+(?:\\.\\d+)?/.exec('$199.99 250 €301.25 52.6 33 £23.10 ¥250 4000')`,
};
const negativeLookbehind = {
  syntax: '(?<!y)x',
  example: `/(?<!O[xb]?)\\d+/.exec('0432 0x2ab50c 235 0b101101 520 155')`,
};

const questions: QuestionInfo[] = [
  {
    question: `How to use lookaround assertions?`,
    answer: (
      <div>
        <p>
          Positive lookahead <code>{positiveLookahead.syntax}</code>: Matches{' '}
          <code>x</code> only if <code>x</code> is followed by <code>y</code>
        </p>
        <CodeViewer language="typescript">
          {positiveLookahead.example}
        </CodeViewer>

        <p>
          Negative lookahead <code>{negativeLookahead.syntax}</code>: Matches{' '}
          <code>x</code> only if <code>x</code> is not followed by{' '}
          <code>y</code>
        </p>
        <CodeViewer language="typescript">
          {negativeLookahead.example}
        </CodeViewer>

        <p>
          Positive lookbehind <code>{positiveLookbehind.syntax}</code>: Matches{' '}
          <code>x</code> only if <code>x</code> is preceded by <code>y</code>
        </p>
        <CodeViewer language="typescript">
          {positiveLookbehind.example}
        </CodeViewer>

        <p>
          Negative lookbehind <code>{negativeLookbehind.syntax}</code>: Matches{' '}
          <code>x</code> only if <code>x</code> is not preceded by{' '}
          <code>y</code>
        </p>
        <CodeViewer language="typescript">
          {negativeLookbehind.example}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] Assertions`,
        url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions`,
      },
      {
        name: `ES2018: RegExp lookbehind assertions`,
        url: `https://2ality.com/2017/05/regexp-lookbehind-assertions.html`,
      },
      {
        name: `Regular expressions in JavaScript: lookaround assertions by example`,
        url: `https://2ality.com/2019/10/regexp-lookaround-assertions.html`,
      },
    ],
  },
  {
    question: `How to capture groups by name?`,
    answer: (
      <div>
        <p>
          Use named capture groups <code>{`(?<name>...)`}</code>
        </p>
        <CodeViewer language="typescript">{`/"(?<key>\\w+)": "(?<value>\\w+)"/.exec(string)`}</CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[SMASHING MAGAZINE] New JavaScript Features That Will Change How You Write Regex`,
        url: `https://www.smashingmagazine.com/2019/02/regexp-features-regular-expressions/#named-capture-groups`,
      },
      {
        name: `ES2018: RegExp named capture groups`,
        url: `https://2ality.com/2017/05/regexp-named-capture-groups.html`,
      },
      {
        name: `[MDN] Groups and ranges`,
        url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges`,
      },
    ],
  },
];

export default questions;
