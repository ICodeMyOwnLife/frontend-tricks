import React from 'react';
import { QuestionInfo } from 'components/Question';
import Code from 'components/Code';

const questions: QuestionInfo[] = [
  {
    question: `How to set gradient or image background for text?`,
    answer: (
      <Code language="scss">
        {`.Text {
  width: fit-content;
  margin-bottom: 20px;
  font-size: 100px;
  font-weight: bold;
  text-align: center;
  color: transparent;
  background-clip: text !important;
}

.linear {
  background: linear-gradient(
    45deg,
    rgba(0, 128, 0, 1) 0%,
    rgba(255, 255, 0, 1) 50%,
    rgba(0, 128, 0, 1) 100%
  );
}

.radial {
  background: radial-gradient(
    ellipse at center,
    rgba(235, 196, 255, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}

.url {
  background: url(./1.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}`}
      </Code>
    ),
    references: [
      {
        name: `[MDN] background-clip`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip`,
      },
      {
        name: `[CSS-TRICKS] background-clip`,
        url: `https://css-tricks.com/almanac/properties/b/background-clip/`,
      },
    ],
  },
];

export default questions;
