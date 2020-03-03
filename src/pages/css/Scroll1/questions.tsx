import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to make target of jump link not being hidden by a fixed header?`,
    answer: (
      <div>
        <p>
          Use <code>scroll-margin-top</code> to push to target below the fixed
          header
        </p>
        <p>
          The <code>scroll-margin-top</code> property defines the top margin of
          the scroll snap area that is used for snapping this box to the
          snapport. The scroll snap area is determined by taking the transformed
          border box, finding its rectangular bounding box (axis-aligned in the
          scroll container’s coordinate space), then adding the specified
          outsets.
        </p>
        <p>
          Optionally using <code>scroll-behavior: smooth</code> to add a smooth
          transition to the scroll
        </p>
        <CodeViewer language="css">
          {`
.Scroll1-scrollMargin-184 {
  height: 320px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

.Scroll1-scrollHeading-187 {
  scroll-margin-top: 72px;
  scroll-snap-align: start;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] scroll-margin-top`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top`,
      },
      {
        name: `[MDN] scroll-behavior`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior`,
      },
      {
        name: `[CSS-TRICKS] Fixed Headers and Jump Links? The Solution is scroll-margin-top`,
        url: `https://css-tricks.com/fixed-headers-and-jump-links-the-solution-is-scroll-margin-top/`,
      },
    ],
  },
  {
    question: `How to lock the viewport to certain elements or locations when scrolling?`,
    answer: (
      <div>
        <p>
          Use a combination of <code>scroll-snap-type</code> and{' '}
          <code>scroll-snap-align</code>
        </p>
        <p>
          The <code>scroll-snap-type</code> CSS property sets how strictly snap
          points are enforced on the scroll container in case there is one.
        </p>
        <p>
          The <code>scroll-snap-align</code> property specifies the box’s snap
          position as an alignment of its snap area (as the alignment subject)
          within its snap container’s snapport (as the alignment container). The
          two values specify the snapping alignment in the block axis and inline
          axis, respectively. If only one value is specified, the second value
          defaults to the same value.
        </p>
      </div>
    ),
    references: [
      {
        name: `[MDN] scroll-snap-type`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type`,
      },
      {
        name: `[MDN] scroll-snap-align`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align`,
      },
      {
        name: `[CSS-TRICKS] Practical CSS Scroll Snapping`,
        url: `https://css-tricks.com/practical-css-scroll-snapping/`,
      },
    ],
  },
];

export default questions;
