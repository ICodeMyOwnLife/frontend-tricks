import React from 'react';
import { QuestionInfo } from 'components/Question';
import Code from 'components/Code';

const questions: QuestionInfo[] = [
  {
    question: `How to clip an image?`,
    answer: (
      <div>
        <p>
          Use <code>clip-path</code> with additional <code>shape-outside</code>:
        </p>
        <Code language="scss">
          {`.Inset1 {
  $inset1: inset(40px 60px 0 0);
  shape-outside: $inset1;
  clip-path: $inset1;
}

.Inset2 {
  $inset2: inset(40px 60px 0 0 round 6px 24px 48px 80px);
  shape-outside: $inset2;
  clip-path: $inset2;
}

.Circle1 {
  $circle1: circle(140px);
  shape-outside: $circle1;
  clip-path: $circle1;
}

.Circle2 {
  shape-outside: circle(168px at 64px 28px);
  clip-path: circle(152px at 64px 28px);
}

.Ellipse1 {
  $ellipse1: ellipse(140px 90px);
  shape-outside: $ellipse1;
  clip-path: $ellipse1;
}

.Ellipse2 {
  shape-outside: ellipse(180px 120px at 114px 62px);
  clip-path: ellipse(180px 120px at 100px 50px);
}

.Polygon1 {
  $polygon1: polygon(50% 0%, 98% 35%, 79% 91%, 21% 91%, 2% 35%);
  shape-outside: $polygon1;
  clip-path: $polygon1;
}

.Polygon2 {
  $polygon2: polygon(evenodd, 50% 0%, 79% 91%, 2% 35%, 98% 35%, 21% 91%);
  shape-outside: $polygon2;
  clip-path: $polygon2;
}

.Url1 {
  shape-outside: url(#myClip);
  clip-path: url(#myClip);
}

.Transition {
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
        </Code>
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
