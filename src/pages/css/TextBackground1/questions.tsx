import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to set gradient or image background for text?`,
    answer: (
      <div>
        <ol>
          <li>
            Use <code>background-image</code> to add gradient or image
          </li>
          <li>
            Set <code>background-clip: text</code> to clip the background. We
            also need to set <code>color: transparent</code> or{' '}
            <code>text-fill-color: transparent</code> to remove the fill color
            from the text
          </li>
          <li>
            Add <code>background-color</code> fallback
          </li>
          <li>
            In Safari, multi-line text with <code>background-clip: text</code>{' '}
            will have some weird appearance, to fix that, add{' '}
            <code>box-decoration-break: clone</code>
          </li>
        </ol>

        <CodeViewer language="css">
          {`.StaticText-text-187 {
  color: transparent;
  font-size: 120px;
  font-weight: bold;
  line-height: 1.2;
  background-clip: text;
  background-color: #ffa726;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
}

.StaticText-linear-188 {
  background-image: linear-gradient(
        to bottom,
        #004d40 0%,
        #ffee58 50%,
        #004d40 100%
      );
}

.StaticText-radial-189 {
  background-image: radial-gradient(
        ellipse at center,
        #ba68c8 0%,
        rgba(0, 0, 0, 1) 100%
      );
}

.StaticText-conic-190 {
  background-image: conic-gradient(
        from 65deg,
        #f44336,
        #e91e63,
        #9c27b0,
        #673ab7,
        #3f51b5,
        #2196f3,
        #03a9f4,
        #00bcd4,
        #009688,
        #4caf50,
        #8bc34a,
        #cddc39,
        #ffeb3b,
        #ffc107,
        #ff9800,
        #ff5722,
        #f44336);
}

.StaticText-image-191 {
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
      {
        name: `Multi-line gradient links`,
        url: `https://zellwk.com/blog/multi-line-gradient-links/`,
      },
    ],
  },
  {
    question: `How to animate the color of a text on hover?`,
    answer: (
      <div>
        <p>3 ways to animate the color of text:</p>
        <ol>
          <li>
            Use <code>background-clip: text</code> with hard-stop, double-sized
            linear background and animate <code>background-position</code>
          </li>
          <li>
            Use a pseudo-element on top of the text with{' '}
            <code>overflow: hidden</code> and animate its <code>width</code>/
            <code>heigh</code>
          </li>
          <li>
            Use a pseudo-element on top of the text and animate its{' '}
            <code>clip-path</code>
          </li>
        </ol>

        <CodeViewer language="css">
          {`.HoverText-root-218 {
  text-align: center;
}

.HoverText-text-219 {
  display: inline-block;
  position: relative;
  font-size: 80px;
  font-weight: bold;
}

.HoverText-horizontal-220 {
  color: transparent;
  transition: background-position-x 500ms ease;
  background-clip: text;
  background-size: 200% 100%;
  background-image: linear-gradient(to right, #ffff00, #fb8c00 25%, #ffff00 50%, #fb8c00 50%);
  -moz-background-clip: text;
  background-position-x: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
}

.HoverText-horizontal-220:hover {
  background-position-x: 0;
}

.HoverText-vertical-221 {
  color: #fb8c00;
}

.HoverText-vertical-221::after {
  top: 0;
  left: 0;
  color: transparent;
  height: 0;
  content: attr(data-text);
  overflow: hidden;
  position: absolute;
  transition: height 500ms ease;
  background-clip: text;
  background-image: linear-gradient(to right, #ffff00, #fb8c00, #ffff00);
  -moz-background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
}

.HoverText-vertical-221:hover::after {
  height: 100%;
}

.HoverText-diagonal-222 {
  color: #fb8c00;
}

.HoverText-diagonal-222::after {
  top: 0;
  left: 0;
  color: transparent;
  right: 0;
  bottom: 0;
  content: attr(data-text);
  position: absolute;
  clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  background-clip: text;
  background-image: linear-gradient(to right, #ffff00, #fb8c00, #ffff00);
  -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  transition-duration: 500ms;
  transition-property: clip-path, -webkit-clip-path;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  -ms-transition-timing-function: ease;
}

.HoverText-diagonal-222:hover::after {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[CSS-TRICkS] 4 Ways to Animate the Color of a Text Link on Hover`,
        url: `https://css-tricks.com/4-ways-to-animate-the-color-of-a-text-link-on-hover/`,
      },
      {
        name: `[MDN] clip-path`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path`,
      },
    ],
  },
  {
    question: `How to create a shiny text?`,
    answer: (
      <div>
        <p>
          Use <code>background-clip: text</code> long-sized, half-transparent
          linear background and animate <code>background-position</code>
        </p>

        <CodeViewer language="css">
          {`.ShinyText-text-198 {
  color: transparent;
  display: inline-block;
  position: relative;
  animation: ShinyText-keyframes-shiny-199 7s linear infinite;
  font-size: 80px;
  font-weight: bold;
  background-clip: text;
  background-size: 500% 100%;
  background-image: linear-gradient(105deg, transparent 40%, #18ffff 50%, transparent 60%);
  -moz-background-clip: text;
  background-position-x: 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
}

@-webkit-keyframes ShinyText-keyframes-shiny-199 {
  from {
    background-position-x: 400%;
  }
  to {
    background-position-x: 0;
  }
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[CodePen] Shining Text Effect`,
        url: `https://codepen.io/grohit/pen/mdJqEzK`,
      },
    ],
  },
];

export default questions;
