import React from 'react';
import CodeViewer from 'components/CodeViewer';
import { QuestionInfo } from 'types/app-common';

const questions: QuestionInfo[] = [
  {
    question: `How to create a flip card with CSS?`,
    answer: (
      <div>
        <ol>
          <li>
            The body should have <code>display: flex</code> to help make
            contents have the same height, and{' '}
            <code>transform-style: preserve-3d</code> to have the flip effect
            (bringing the back content to the front and the front content to the
            back)
          </li>
          <li>
            The front and back content should have <code>min-width: 100%</code>{' '}
            to take the whole width of body, and{' '}
            <code>backface-visibility: hidden</code> to hide the content in the
            backface
          </li>
          <li>
            Turn the back content into the backface of the card by rotating
            vertically and moving to back of front content using{' '}
            <code>transform: rotateX(-180deg) translateX(-100%)</code>
          </li>
          <li>
            Make the body rotate vertically when user hovers over the root with{' '}
            <code>transform: rotateX(180deg)</code>
          </li>
          <li>
            Lastly, set <code>perspective</code> of the root to some large
            positive value to give a more 3D-perspective feeling
          </li>
        </ol>

        <CodeViewer language="css">
          {`
.FlipCard-root-188 {
  cursor: pointer;
  display: flex;
  perspective: 40rem;
}

.FlipCard-root-188:focus {
  outline: none;
  box-shadow: none;
}

.FlipCard-body-189 {
  flex: 1;
  display: flex;
  transition: transform 400ms ease;
  transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
}

.FlipCard-root-188:hover .FlipCard-body-189, .FlipCard-root-188:focus .FlipCard-body-189 {
  transform: rotateX(180deg);
}

.FlipCard-content-190 {
  color: #212121;
  display: flex;
  padding: 24px;
  min-width: 100%;
  background: #fafafa;
  box-shadow: 3px 3px 5px 0 rgba(189, 189, 189, 0.43);
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.FlipCard-back-192 {
  transform: rotateX(-180deg) translateX(-100%);
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `Magic Flip Cards: Solving A Common Sizing Problem`,
        url: `https://www.smashingmagazine.com/2020/02/magic-flip-cards-common-sizing-problem/`,
      },
      {
        name: `[MDN] perspective`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/perspective`,
      },
      {
        name: `[MDN] transform-style`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style`,
      },
      {
        name: `[MDN] backface-visibility`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility`,
      },
    ],
  },
  {
    question: `How to create a 3D cube with CSS?`,
    answer: (
      <div>
        <ol>
          <li>
            The root should have <code>transform-style: preserve-3d</code> and{' '}
            <code>perspective</code> being set with a large positive value
          </li>
          <li>
            Each face should have <code>position: absolute</code> and
            transformed using CSS translation and rotation functions
          </li>
          <li>
            Set <code>backface-visibility</code> of faces to{' '}
            <code>visible</code> or <code>hidden</code> based on whether we want
            our cube is see-through or not
          </li>
        </ol>

        <CodeViewer language="typescript">
          {`const opacity = 0.7;

const styles = () =>
  createStyles({
    root: ({ size }: CubeStylesProps) => ({
      position: 'relative',
      width: size,
      height: size,
      transformStyle: 'preserve-3d',
      perspective: '120rem',
    }),
    face: ({ backfaceHidden }) => ({
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 32,
      color: grey[900],
      backfaceVisibility: backfaceHidden ? 'hidden' : 'visible',
    }),
    face1: ({ size }) => ({
      backgroundColor: fade(red[400], opacity),
      transform: \`translateZ($\{size / 2}px)\`,
    }),
    face2: ({ size }) => ({
      backgroundColor: fade(blue[400], opacity),
      transform: \`translateX($\{-size / 2}px) rotateY(-90deg)\`,
    }),
    face3: ({ size }) => ({
      backgroundColor: fade(green[400], opacity),
      transform: \`translateZ($\{-size / 2}px) rotateY(180deg)\`,
    }),
    face4: ({ size }) => ({
      backgroundColor: fade(yellow[400], opacity),
      transform: \`translateX($\{size / 2}px) rotateY(90deg)\`,
    }),
    face5: ({ size }) => ({
      backgroundColor: fade(cyan[400], opacity),
      transform: \`translateY($\{-size / 2}px) rotateX(90deg)\`,
    }),
    face6: ({ size }) => ({
      backgroundColor: fade(purple[400], opacity),
      transform: \`translateY($\{size / 2}px) rotateX(-90deg)\`,
    }),
  });`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] perspective`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/perspective`,
      },
      {
        name: `[MDN] transform-style`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style`,
      },
      {
        name: `[MDN] backface-visibility`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility`,
      },
    ],
  },
];

export default questions;
