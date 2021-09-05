import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to pause and resume animations?`,
    answer: (
      <div>
        <p>
          Use <code>animation-play-state</code>
        </p>
        <p>
          The <code>animation-play-state</code> CSS property sets whether an
          animation is running or paused.
        </p>
        <CodeViewer language="css">
          {`.PlayState-animation-185 {
  animation: 3s linear infinite paused;
}

.PlayState-animation-185:hover {
  animation-play-state: running;
}

@-webkit-keyframes PlayState-keyframes-rotate-186 {
  to {
    transform: rotate(360deg);
  }
}

.PlayState-animation1-187 {
  animation-name: PlayState-keyframes-rotate-186;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] animation-play-state`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state`,
      },
      {
        name: `[MDN] Using CSS animations`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations`,
      },
      {
        name: `[MDN] animation`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/animation`,
      },
    ],
  },
];

export default questions;
