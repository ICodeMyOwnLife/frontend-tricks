/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: (
      <span>
        What is the difference between <code>justify-content</code> vs{' '}
        <code>align-content</code> vs <code>justify-items</code> vs{' '}
        <code>align-items</code> vs <code>justify-self</code> vs{' '}
        <code>align-self</code>?
      </span>
    ),
    answer: (
      <div>
        <p>
          <code>justify-content</code> The CSS <code>justify-content</code>{' '}
          property defines how the browser distributes space between and around
          content items along the main-axis of a flex container, and the inline
          axis of a grid container.
        </p>
        <p>
          <code>align-content</code>: The CSS <code>align-content</code>{' '}
          property sets the distribution of space between and around content
          items along a flexbox's cross-axis or a grid's block axis.
        </p>
        <p>
          <code>justify-items</code>: The CSS <code>justify-items</code>{' '}
          property defines the default <code>justify-self</code> for all items
          of the box, giving them all a default way of justifying each box along
          the appropriate axis.
        </p>
        <p>
          <code>align-items</code>: The CSS <code>align-items</code> property
          sets the <code>align-self</code> value on all direct children as a
          group. In Flexbox, it controls the alignment of items on the Cross
          Axis. In Grid Layout, it controls the alignment of items on the Block
          Axis within their grid area.
        </p>
        <p>
          <code>justify-self</code>: The CSS <code>justify-self</code> property
          sets the way a box is justified inside its alignment container along
          the appropriate axis.
        </p>
        <p>
          <code>align-self</code>: The <code>align-self</code> CSS property
          overrides a grid or flex item's <code>align-items</code> value. In
          Grid, it aligns the item inside the grid area. In Flexbox, it aligns
          the item on the cross axis.
        </p>
      </div>
    ),
    references: [
      {
        name: `[MDN] justify-content`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content`,
      },
      {
        name: `[MDN] align-content`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/align-content`,
      },
      {
        name: `[MDN] justify-items`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items`,
      },
      {
        name: `[MDN] align-items`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/align-items`,
      },
      {
        name: `[MDN] justify-self`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self`,
      },
      {
        name: `[MDN] align-self`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,
      },
      {
        name: `[CSS-TRICKS] A Complete Guide to Grid`,
        url: `https://css-tricks.com/snippets/css/complete-guide-grid/`,
      },
    ],
  },
  {
    question: `How to auto-size columns in CSS Grid to make responsive layout?`,
    answer: (
      <div>
        <p>
          Use <code>auto-fill</code> or <code>auto-fit</code> value and{' '}
          <code>minmax</code> function in <code>repeat</code> function
        </p>

        <CodeViewer language="css">
          {`.Grid1-grid-178 {
  display: grid;
  grid-gap: 24px 32px;
}
.Grid1-autoFillGrid-179 {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.Grid1-autoFitGrid-180 {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}`}
        </CodeViewer>

        <p>
          What is the different between <code>auto-fill</code> and{' '}
          <code>auto-fit</code>?
        </p>
        <p>
          <code>auto-fill</code>: If the grid container has a definite or
          maximal size in the relevant axis, then the number of repetitions is
          the largest possible positive integer that does not cause the grid to
          overflow its grid container. Treating each track as its maximal track
          sizing function (each independent value used to define
          grid-template-rows or grid-template-columns), if that is definite.
          Otherwise, as its minimum track sizing function, and taking grid-gap
          into account. If any number of repetitions would overflow, then the
          repetition is 1. Otherwise, if the grid container has a definite
          minimal size in the relevant axis, the number of repetitions is the
          smallest possible positive integer that fulfills that minimum
          requirement. Otherwise, the specified track list repeats only once.
        </p>
        <p>
          <code>auto-fit</code> Behaves the same as <code>auto-fill</code>,
          except that after placing the grid items any empty repeated tracks are
          collapsed. An empty track is one with no in-flow grid items placed
          into or spanning across it. (This can result in all tracks being
          collapsed, if they’re all empty.) A collapsed track is treated as
          having a single fixed track sizing function of 0px, and the gutters on
          either side of it collapse. For the purpose of finding the number of
          auto-repeated tracks, the user agent floors the track size to a user
          agent specified value (e.g., 1px), to avoid division by zero.
        </p>
      </div>
    ),
    references: [
      {
        name: `[MDN] grid-template-columns`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns`,
      },
      {
        name: `[MDN] repeat()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/repeat`,
      },
      {
        name: `[MDN] minmax()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/minmax`,
      },
      {
        name: `[DEV] CSS Grid : Auto-Fit & Auto-Fill`,
        url: `https://dev.to/nunocpnp/css-grid-auto-fit-auto-fill-4hkh`,
      },
      {
        name:
          '[CSS-TRICKS] Auto-Sizing Columns in CSS Grid: `auto-fill` vs `auto-fit`',
        url: `https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/`,
      },
    ],
  },
];

export default questions;
