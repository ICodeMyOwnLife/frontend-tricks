import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to set gradient or image background for text?`,
    answer: (
      <div>
        <p>
          1. Use <code>background-image</code> to add gradient or image
        </p>
        <p>
          2. Set <code>background-clip: text</code> to clip the background. We
          also need to set <code>color: transparent</code> or{' '}
          <code>text-fill-color: transparent</code> to remove the fill color
          from the text
        </p>
        <p>
          3. Add <code>background-color</code> fallback
        </p>
        <CodeViewer language="css">
          {`
.TextBackground1-text-175 {
  color: transparent;
  font-size: 140px;
  text-align: center;
  font-weight: bold;
  background-clip: text;
  background-color: #ffcdd2;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.TextBackground1-linearBackground-176 {
  background-image: linear-gradient(
        45deg,
        rgba(0, 128, 0, 1) 0%,
        rgba(255, 255, 0, 1) 50%,
        rgba(0, 128, 0, 1) 100%
      );
}

.TextBackground1-radialBackground-177 {
  background-image: radial-gradient(
        ellipse at center,
        rgba(235, 196, 255, 1) 0%,
        rgba(0, 0, 0, 1) 100%
      );
}

.TextBackground1-conicBackground-178 {
  background-image: conic-gradient(
        #42a5f5,
        #ffee58,
        #ef5350,
        #42a5f5);
}

.TextBackground1-imageBackground-179 {
  background-size: cover;
  background-image: url(/static/media/1.195411ab.jpg);
  background-repeat: no-repeat;
  background-position: center;
}`}
        </CodeViewer>
      </div>
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
      {
        name: `How to add a gradient overlay to text with CSS`,
        url: `https://fossheim.io/writing/posts/css-text-gradient/`,
      },
    ],
  },
];

export default questions;
