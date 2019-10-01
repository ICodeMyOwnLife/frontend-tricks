import React from 'react';
import { QuestionInfo } from 'components/Question';

const questions: QuestionInfo[] = [
  {
    question: `How to insert some content before or after an element?`,
    answer: <div />,
    references: [
      {
        name: `[CSS-TRICKS] Valid CSS Content`,
        url: `https://css-tricks.com/valid-css-content/`,
      },
      {
        name: `[MDN] content`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/content`,
      },
      {
        name: `[W3C] Simple Predefined Counter Styles`,
        url: `https://www.w3.org/TR/css-counter-styles-3/#predefined-counters`,
      },
      {
        name: `[MDN] ::before (:before)`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/::before`,
      },
      {
        name: `[MDN] ::after (:after)`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/::after`,
      },
    ],
  },
];

export default questions;
