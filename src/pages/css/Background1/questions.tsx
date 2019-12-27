import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to create a multi-layer background?`,
    answer: (
      <div>
        <p>
          Use <code>background</code> or <code>background-image</code> with
          multiple values separated by commas
        </p>

        <CodeViewer language="css">
          {`.Background1-multiLayer1-174 {
  background: #ffc63e url(/static/media/1.8154abe6.png);
}
.Background1-multiLayer2-175 {
  background: linear-gradient(to bottom, #00000000 0%, #000000ff 100%), linear-gradient(to right, #ffffff 0%, #ff00a5 100%);
}
.Background1-multiLayer3-176 {
  background: url(/static/media/2.32351df8.png) center/contain no-repeat, url(/static/media/3.3fa57ebb.png) center/cover no-repeat, linear-gradient(to right, rgb(36, 218, 168) 0%, rgb(124, 179, 17) 100%);
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] background`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/background`,
      },
      {
        name: `[MDN] background-image`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/background-image`,
      },
      {
        name: `[MDN] Using multiple backgrounds`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds`,
      },
      {
        name: `[CSS-TRICKS] CSS Basics: Using Multiple Backgrounds`,
        url: `https://css-tricks.com/css-basics-using-multiple-backgrounds/`,
      },
    ],
  },
];

export default questions;
