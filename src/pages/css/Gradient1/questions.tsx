/* eslint-disable react/no-unescaped-entities */
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
          {`.Linear-linear1-184 {
  background-image: linear-gradient(
        to right top,
        #512da8,
        #8c9eff);
}

.Linear-linear2-185 {
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

.Linear-linear3-186 {
  background-image: linear-gradient(
        to bottom right,
        #f4511e 30%,
        #ffeb3b,
        #f4511e 70%);
}

.Linear-linear4-187 {
  background-image: linear-gradient(
        to bottom,
        #f5f5f5,
        #9e9e9e 50%,
        #f5f5f5 50%,
        #9e9e9e);
}

.Linear-linear5-188 {
  background-image: linear-gradient(
        140deg,
        #42a5f5 0 20%,
        #0d47a1 0 23%,
        #42a5f5 0 24%,
        #0d47a1 0 25%,
        #42a5f5 0 26%,
        #0d47a1 0 27%,
        #42a5f5 0 28%,
        #0d47a1 0 29%,
        #42a5f5 0 100%);
}

@-webkit-keyframes Linear-keyframes-background1-189 {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.Linear-linear6-190 {
  animation: Linear-keyframes-background1-189 16s ease infinite;
  background-size: 200% 200%;
  background-image: linear-gradient(
        -45deg,
        #ff7043,
        #e91e63,
        #00acc1,
        #00c853);
}

.Linear-linear7-191 {
  background-image: linear-gradient(
        90deg,
        #3f51b5 0 calc(100% / 8),
        #7e57c2 0 calc(200% / 8),
        #f44336 0 calc(300% / 8),
        #ff7043 0 calc(400% / 8),
        #ffb300 0 calc(500% / 8),
        #cddc39 0 calc(600% / 8),
        #00c853 0 calc(700% / 8),
        #00e5ff 0 calc(800% / 8)
      );
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
      {
        name: `[CodePen] Pure CSS Gradient Background Animation`,
        url: `https://codepen.io/P1N2O/pen/pyBNzX`,
      },
      {
        name: `[CodePen] Double stop position gradients`,
        url: `https://codepen.io/thebabydino/pen/VwYgaQQ/`,
      },
    ],
  },
  {
    question: `How to create repeating linear gradient?`,
    answer: (
      <div>
        <p>
          Use <code>repeating-linear-gradient</code>
        </p>
        <p>
          The <code>repeating-linear-gradient()</code> CSS function creates an
          image consisting of repeating linear gradients. It is similar to{' '}
          <code>linear-gradient()</code> and takes the same arguments, but it
          repeats the color stops infinitely in all directions so as to cover
          its entire container. The function's result is an object of the{' '}
          <code>{`<gradient>`}</code> data type, which is a special kind of{' '}
          <code>{`<image>`}</code>.
        </p>
        <CodeViewer language="css">
          {`@-webkit-keyframes RepeatingLinear-keyframes-progress1-198 {
  from {
    background-position-x: 100%;
  }
  to {
    background-position-x: 0%;
  }
}

.RepeatingLinear-repeatingLinear1-199 {
  animation: RepeatingLinear-keyframes-progress1-198 8s linear infinite;
  background-size: 200% 100%;
  background-image: repeating-linear-gradient(
        -60deg,
        rgba(198, 255, 0, 0.7) 0 2%,
        #c6ff00 0 4%);
}

.RepeatingLinear-repeatingLinear2-200 {
  background-image: 
      repeating-linear-gradient(45deg, #ffffffaa 0 2px, transparent 0 10px),
      repeating-linear-gradient(-45deg, #ffffffaa 0 2px, transparent 0 12px);
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] repeating-linear-gradient()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-linear-gradient`,
      },
      {
        name: `[CSS-TRICKS] CSS Repeating Gradients`,
        url: `https://css-tricks.com/snippets/css/css-repeating-gradients/`,
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
        name: `[CodePen] Double stop position gradients`,
        url: `https://codepen.io/thebabydino/pen/VwYgaQQ/`,
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
          {`.Radial-radial1-201 {
  background-image: radial-gradient(
        circle farthest-side at 70% 30%,
        #f4ff81,
        #e64a19 92%);
}

.Radial-radial2-202 {
  background-image: radial-gradient(
        ellipse 80% 90% at 50% 15%,
        #84ffff,
        #283593);
}

.Radial-radial3-203 {
  background-image: radial-gradient(
        closest-side,
        #ffee58 10%,
        transparent 20% 36%,
        #ffeb3b 36% 38%,
        transparent 40% 56%,
        #fdd835 56% 58%,
        transparent 60% 76%,
        #fbc02d 76% 78%,
        transparent 80% 96%,
        #f9a825 96% 98%,
        transparent 100%);
}

.Radial-radial4-204 {
  background-color: #8d6e63;
  background-image: radial-gradient(
  100% 100% at 50% 0%,
  transparent 0 49%,
  #5d4037 0 51%,
  transparent 0 100%
),
radial-gradient(
  100% 100% at 100% 50%,
  transparent 0 49%,
  #5d4037 0 51%,
  transparent 0 100%
),
radial-gradient(
  100% 100% at 50% 100%,
  transparent 0 49%,
  #5d4037 0 51%,
  transparent 0 100%
),
radial-gradient(
  100% 100% at 0% 50%,
  transparent 0 49%,
  #5d4037 0 51%,
  transparent 0 100%
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
    question: `How to create repeating radial gradient?`,
    answer: (
      <div>
        <p>
          Use <code>repeating-radial-gradient</code>
        </p>
        <p>
          The <code>repeating-radial-gradient()</code> CSS function creates an
          image consisting of repeating gradients that radiate from an origin.
          It is similar to <code>radial-gradient()</code> and takes the same
          arguments, but it repeats the color stops infinitely in all directions
          so as to cover its entire container, similar to{' '}
          <code>repeating-linear-gradient()</code>. The function's result is an
          object of the <code>{`<gradient>`}</code> data type, which is a
          special kind of <code>{`<image>`}</code>.
        </p>
        <CodeViewer language="css">
          {`@-webkit-keyframes RepeatingRadial-keyframes-background1-207 {
  from {
    background-size: 100% 100%;
  }
  to {
    background-size: 200% 200%;
  }
}

.RepeatingRadial-repeatingRadial1-208 {
  animation: RepeatingRadial-keyframes-background1-207 4s linear infinite;
  background-image: repeating-radial-gradient(
        transparent 0 2%,
        #ffc400 0 4%,
        transparent 4%
      );
  background-position: center;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] repeating-radial-gradient()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-radial-gradient`,
      },
      {
        name: `[CSS-TRICKS] CSS Repeating Gradients`,
        url: `https://css-tricks.com/snippets/css/css-repeating-gradients/`,
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
          {`@-webkit-keyframes Conic-keyframes-rotate-211 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.Conic-conic1-212 {
  background-image: conic-gradient(from 40deg, white, black, white);
}

.Conic-conic2-213 {
  animation: Conic-keyframes-rotate-211 4s linear infinite;
  background-image: conic-gradient(
        #f00,
        #ff0,
        #0f0,
        #0ff,
        #00f,
        #f0f,
        #f00);
}

.Conic-conic3-214 {
  background-image: conic-gradient(
        #ff5252 0 50deg,
        #ffff00 0 70deg,
        #e040fb 0 102deg,
        #69f0ae 0 192deg,
        #ffab40 0 224deg,
        #536dfe 0 360deg);
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
  {
    question: `How to create repeating conic gradient?`,
    answer: (
      <div>
        <p>
          Use <code>repeating-conic-gradient</code>
        </p>
        <p>
          The <code>repeating-conic-gradient()</code> CSS function creates an
          image consisting of a repeating gradient (rather than a single
          gradient) with color transitions rotated around a center point (rather
          than radiating from the center). Example repeating conic gradients
          include starbursts. The result of the{' '}
          <code>repeating-conic-gradient()</code> function is an object of the{' '}
          <code>{`<gradient>`}</code> data type, which is a special kind of{' '}
          <code>{`<image>`}</code>.
        </p>
        <CodeViewer language="css">
          {`@-webkit-keyframes RepeatingConic-keyframes-rotate-217 {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
}

.RepeatingConic-repeatingConic1-218 {
  animation: RepeatingConic-keyframes-rotate-217 6s linear infinite;
  background-image: repeating-conic-gradient(
        from calc(-1turn / 12),
        #4caf50 0 calc(1turn / 6),
        transparent 0 calc(2turn / 6),
        #4caf50 calc(2turn / 6)
      );
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] repeating-conic-gradient()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-conic-gradient`,
      },
      {
        name: `[CSS-TRICKS] CSS Repeating Gradients`,
        url: `https://css-tricks.com/snippets/css/css-repeating-gradients/`,
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
