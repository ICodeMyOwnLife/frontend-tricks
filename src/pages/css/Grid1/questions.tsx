import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
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
