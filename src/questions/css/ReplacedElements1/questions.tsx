import { QuestionInfo } from 'components/Question';
import React from 'react';
import Code from 'components/Code';

const questions: QuestionInfo[] = [
  {
    question: `What are replaced elements?`,
    answer: (
      <div>
        <p>Typical replaced elements are:</p>
        <ul>
          <li>
            <code>iframe</code>
          </li>
          <li>
            <code>video</code>
          </li>
          <li>
            <code>embed</code>
          </li>
          <li>
            <code>img</code>
          </li>
        </ul>

        <p>
          Some elements are treated as replaced elements only in specific cases:
        </p>
        <ul>
          <li>
            <code>option</code>
          </li>
          <li>
            <code>audio</code>
          </li>
          <li>
            <code>canvas</code>
          </li>
          <li>
            <code>object</code>
          </li>
          <li>
            <code>applet</code>
          </li>
        </ul>
      </div>
    ),
    references: [
      {
        name: `[MDN] Replaced elements`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element`,
      },
    ],
  },
  {
    question: `How to control object position within the content box?`,
    answer: (
      <div>
        <p>
          Use <code>object-fit</code> and <code>object-position</code>
        </p>
        <Code language="css">
          {`.element {
  object-fit: contain;
  object-position: center center;
}`}
        </Code>
      </div>
    ),
    references: [
      {
        name: `[MDN] Replaced elements`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element`,
      },
      {
        name: `[MDN] object-fit`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit`,
      },
      {
        name: `[CSS-TRICKS] object-fit`,
        url: `https://css-tricks.com/almanac/properties/o/object-fit/`,
      },
      {
        name: `[MDN] object-position`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/object-position`,
      },
      {
        name: `[CSS_TRICKS] object-position`,
        url: `https://css-tricks.com/almanac/properties/o/object-position/`,
      },
    ],
  },
];

export default questions;
