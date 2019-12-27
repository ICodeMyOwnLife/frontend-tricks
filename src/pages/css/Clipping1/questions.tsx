import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to clip an element into a defined shape?`,
    answer: (
      <div>
        <p>
          Use <code>clip-path</code> to clip an element.
        </p>
        <p>
          If we want texts wrap around the clipped element, use{' '}
          <code>float</code> combined with <code>shape-outside</code>
        </p>
        <CodeViewer language="scss">
          {`.left {
  float: left;
  margin-right: 20px;
}

.right {
  float: right;
  margin-left: 20px;
}

.none {
  shape-outside: none;
  clip-path: none;
}

.inset1 {
  $inset1: inset(40px 60px 0 0);
  shape-outside: $inset1;
  clip-path: $inset1;
}

.inset2 {
  $inset2: inset(40px 0 0 60px round 24px 6px 80px 48px);
  shape-outside: $inset2;
  clip-path: $inset2;
}

.circle1 {
  $circle1: circle(140px);
  shape-outside: $circle1;
  clip-path: $circle1;
}

.circle2 {
  shape-outside: circle(162px at 180px 40px);
  clip-path: circle(152px at 160px 28px);
}

.ellipse1 {
  $ellipse1: ellipse(140px 90px);
  shape-outside: $ellipse1;
  clip-path: $ellipse1;
}

.ellipse2 {
  shape-outside: ellipse(192px 124px at 200px 56px);
  clip-path: ellipse(180px 120px at 180px 44px);
}

.polygon1 {
  $polygon1: polygon(50% 0%, 98% 35%, 79% 91%, 21% 91%, 2% 35%);
  shape-outside: $polygon1;
  clip-path: $polygon1;
}

.polygon2 {
  $polygon2: polygon(evenodd, 50% 0%, 79% 91%, 2% 35%, 98% 35%, 21% 91%);
  shape-outside: $polygon2;
  clip-path: $polygon2;
}

.url1 {
  shape-outside: url(./2.png);
  clip-path: url(#myClip);
}

.transition {
  $polygon-normal: polygon(50% 0, 100% 100%, 0 100%);
  shape-outside: $polygon-normal;
  clip-path: $polygon-normal;
  transition: 1s ease all;

  &:hover {
    $polygon-hover: polygon(100% 0, 50% 100%, 0 0);
    shape-outside: $polygon-hover;
    clip-path: $polygon-hover;
  }
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] clip-path`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path`,
      },
      {
        name: `[MDN] shape-outside`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside`,
      },
      {
        name: `[CSS-TRICKS] clip-path`,
        url: `https://css-tricks.com/almanac/properties/c/clip-path/`,
      },
      {
        name: `[CSS-TRICKS] shape-outside`,
        url: `https://css-tricks.com/almanac/properties/s/shape-outside/`,
      },
      {
        name: `[CSS-TRICKS] Clipping and Masking in CSS`,
        url: `https://css-tricks.com/clipping-masking-css/`,
      },
      {
        name: `[CSS-TRICKS] Sketchy Avatars with CSS clip-path`,
        url: `https://css-tricks.com/sketchy-avatars-css-clip-path/`,
      },
      {
        name: `[codrops] clip-path`,
        url: `https://tympanus.net/codrops/css_reference/clip-path/`,
      },
      {
        name: `[codrops] shape-outside`,
        url: `https://tympanus.net/codrops/css_reference/shape-outside/`,
      },
      {
        name: `[codrops] basic-shape`,
        url: `https://tympanus.net/codrops/css_reference/basic-shape/`,
      },
      {
        name: `CSS clip-path maker`,
        url: `https://bennettfeely.com/clippy/`,
      },
      {
        name: `[w3c] Winding rule: the ‘fill-rule’ property`,
        url: `https://www.w3.org/TR/SVG/painting.html#FillRuleProperty`,
      },
    ],
  },
];

export default questions;
