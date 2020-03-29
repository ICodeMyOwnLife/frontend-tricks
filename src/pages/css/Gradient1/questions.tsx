/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import CodeViewer from 'components/CodeViewer';
import { QuestionInfo } from 'types/app-common';

const questions: QuestionInfo[] = [
  {
    question: `How to create linear gradient?`,
    answer: (
      <div>
        <p>
          Use <code>linear-gradient</code>
        </p>
        <p>
          <code>The linear-gradient()</code> CSS function creates an image
          consisting of a progressive transition between two or more colors
          along a straight line. Its result is an object of the{' '}
          <code>{`<gradient>`}</code> data type, which is a special kind of{' '}
          <code>{`<image>`}</code>.
        </p>
        <CodeViewer language="css">
          {`.Linear-linear1-188 {
  background-image: linear-gradient(
        to right top,
        #512da8,
        #8c9eff);
}

.Linear-linear2-189 {
  background-image: linear-gradient(
        -90deg,
        #f00,
        #ff0,
        #0f0,
        #0ff,
        #00f,
        #f0f,
        #f00);
}

.Linear-linear3-190 {
  background-image: linear-gradient(
        to bottom right,
        #f4511e 30%,
        #ffeb3b,
        #f4511e 70%);
}

.Linear-linear4-191 {
  background-image: linear-gradient(
        to bottom,
        #f5f5f5,
        #9e9e9e 50%,
        #f5f5f5 50%,
        #9e9e9e);
}

.Linear-linear5-192 {
  background-image: linear-gradient(
        140deg,
        #42a5f5 20%,
        #0d47a1 20%,
        #0d47a1 23%,
        #42a5f5 23%,
        #42a5f5 24%,
        #0d47a1 24%,
        #0d47a1 25%,
        #42a5f5 25%,
        #42a5f5 26%,
        #0d47a1 26%,
        #0d47a1 27%,
        #42a5f5 27%,
        #42a5f5 28%,
        #0d47a1 28%,
        #0d47a1 29%,
        #42a5f5 29%);
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] linear-gradient()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient`,
      },
      {
        name: `[CSS-TRICKS] CSS Linear Gradient`,
        url: `https://css-tricks.com/snippets/css/css-linear-gradient/`,
      },
      {
        name: `[CSS-TRICKS] CSS Gradients`,
        url: `https://css-tricks.com/css3-gradients/`,
      },
      {
        name: `[MDN] Using CSS gradients`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients`,
      },
      {
        name: `uiGradients`,
        url: `https://uigradients.com/`,
      },
      {
        name: `CSS Gradient`,
        url: `https://cssgradient.io/`,
      },
      {
        name: `CSS3 Patterns Gallery`,
        url: `https://leaverou.github.io/css3patterns/`,
      },
      {
        name: `CSS3 Gradients`,
        url: `http://standardista.com/cssgradients/`,
      },
    ],
  },
  {
    question: `How to create radial gradient?`,
    answer: (
      <div>
        <p>
          Use <code>radial-gradient</code>
        </p>
        <p>
          The <code>radial-gradient()</code> CSS function creates an image
          consisting of a progressive transition between two or more colors that
          radiate from an origin. Its shape may be a circle or an ellipse. The
          function's result is an object of the <code>{`<gradient>`}</code> data
          type, which is a special kind of <code>{`<image>`}</code>.
        </p>
        <CodeViewer language="css">
          {`.Radial-radial1-196 {
  background-image: radial-gradient(
        circle farthest-side at 70% 30%,
        #f4ff81,
        #e64a19 92%);
}

.Radial-radial2-197 {
  background-image: radial-gradient(
        ellipse 80% 90% at 50% 15%,
        #84ffff,
        #283593);
}

.Radial-radial3-198 {
  background-image: -webkit-radial-gradient(
        closest-side
        #ffee58 10%,
        transparent 20%,
        transparent 36%,
        #ffeb3b 36%,
        #ffeb3b 38%,
        transparent 40%,
        transparent 56%,
        #fdd835 56%,
        #fdd835 58%,
        transparent 60%,
        transparent 76%,
        #fbc02d 76%,
        #fbc02d 78%,
        transparent 80%,
        transparent 96%,
        #f9a825 96%,
        #f9a825 98%,
        transparent 100%);
}

.Radial-radial4-199 {
  background-color: #8d6e63;
  background-image: radial-gradient(
  100% 100% at 50% 0%,
  transparent 49%,
  #5d4037 49%,
  #5d4037 51%,
  transparent 51%
),
radial-gradient(
  100% 100% at 100% 50%,
  transparent 49%,
  #5d4037 49%,
  #5d4037 51%,
  transparent 51%
),
radial-gradient(
  100% 100% at 50% 100%,
  transparent 49%,
  #5d4037 49%,
  #5d4037 51%,
  transparent 51%
),
radial-gradient(
  100% 100% at 0% 50%,
  transparent 49%,
  #5d4037 49%,
  #5d4037 51%,
  transparent 51%
);
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] radial-gradient()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient`,
      },
      {
        name: `[CSS-TRICKS] CSS Radial Gradient`,
        url: `https://css-tricks.com/snippets/css/css-radial-gradient/`,
      },
      {
        name: `[CSS-TRICKS] CSS Gradients`,
        url: `https://css-tricks.com/css3-gradients/`,
      },
      {
        name: `[MDN] Using CSS gradients`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients`,
      },
      {
        name: `uiGradients`,
        url: `https://uigradients.com/`,
      },
      {
        name: `CSS Gradient`,
        url: `https://cssgradient.io/`,
      },
      {
        name: `CSS3 Patterns Gallery`,
        url: `https://leaverou.github.io/css3patterns/`,
      },
      {
        name: `CSS3 Gradients`,
        url: `http://standardista.com/cssgradients/`,
      },
    ],
  },
  {
    question: `How to create conic gradient?`,
    answer: (
      <div>
        <p>
          Use <code>conic-gradient</code>
        </p>
        <p>
          The <code>conic-gradient()</code> CSS function creates an image
          consisting of a gradient with color transitions rotated around a
          center point (rather than radiating from the center). Example conic
          gradients include pie charts and color wheels. The result of the{' '}
          <code>conic-gradient()</code> function is an object of the{' '}
          <code>{`<gradient>`}</code> data type, which is a special kind of{' '}
          <code>{`<image>`}</code>.
        </p>
        <CodeViewer language="css">
          {`.Conic-conic1-203 {
  background-image: conic-gradient(from 40deg, white, black, white);
}

.Conic-conic2-204 {
  animation: Conic-keyframes-rotate-202 4s linear infinite;
  background-image: conic-gradient(
        #f00,
        #ff0,
        #0f0,
        #0ff,
        #00f,
        #f0f,
        #f00);
}

.Conic-conic3-205 {
  animation: Conic-keyframes-rotate-202 4s linear infinite;
  background-image: conic-gradient(
        from -40deg,
        #ffd740 80deg,
        transparent 80deg,
        transparent 120deg,
        #ffd740 120deg,
        #ffd740 200deg,
        transparent 200deg,
        transparent 240deg,
        #ffd740 240deg,
        #ffd740 320deg,
        transparent 320deg
        );
}

.Conic-conic4-206 {
  background-image: conic-gradient(
        #ff5252,
        #ff5252 50deg,
        #ffff00 50deg,
        #ffff00 70deg,
        #e040fb 70deg,
        #e040fb 82deg,
        #69f0ae 82deg,
        #69f0ae 168deg,
        #ffab40 168deg,
        #ffab40 194deg,
        #536dfe 194deg,
        #536dfe);
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] conic-gradient()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/conic-gradient`,
      },
      {
        name: `[CSS-TRICKS] CSS Conic Gradient`,
        url: `https://css-tricks.com/snippets/css/css-conic-gradient/`,
      },
      {
        name: `[CSS-TRICKS] CSS Gradients`,
        url: `https://css-tricks.com/css3-gradients/`,
      },
      {
        name: `[MDN] Using CSS gradients`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients`,
      },
    ],
  },
];

export default questions;
