/* eslint-disable react/no-unescaped-entities */
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to create CSS Grid layout?`,
    answer: <div />,
    references: [
      {
        name: `Understanding CSS Grid: Creating A Grid Container`,
        url: `https://www.smashingmagazine.com/2020/01/understanding-css-grid-container/`,
      },
      {
        name: `Understanding CSS Grid: Grid Lines`,
        url: `https://www.smashingmagazine.com/2020/01/understanding-css-grid-lines/`,
      },
      {
        name: `[CSS-TRICKS] A Complete Guide to Grid`,
        url: `https://css-tricks.com/snippets/css/complete-guide-grid/`,
      },
    ],
  },
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

        <p>
          The good thing when creating responsive layout with CSS Grid is it
          depends on the container width rather then the window width as in the
          case of media query.
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
        name: '[CSS-TRICKS] Auto-Sizing Columns in CSS Grid: `auto-fill` vs `auto-fit`',
        url: `https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/`,
      },
    ],
  },
  {
    question: 'How to define areas in grid layouts?',
    answer: (
      <div>
        <p>
          Use <code>grid-template-areas</code> with <code>grid-area</code> and
          optionally <code>grid-auto-flow</code>
        </p>
        <p>
          The <code>grid-template-areas</code> CSS property specifies named grid
          areas.
        </p>
        <p>
          The <code>grid-area</code> CSS property is a shorthand property for
          <code>grid-row-start</code>, <code>grid-column-start</code>,{' '}
          <code>grid-row-end</code> and <code>grid-column-end</code>, specifying
          a grid item’s size and location within the grid by contributing a
          line, a span, or nothing (automatic) to its grid placement, thereby
          specifying the edges of its grid area.
        </p>
        <p>
          The <code>grid-auto-flow</code> CSS property controls how the
          auto-placement algorithm works, specifying exactly how auto-placed
          items get flowed into the grid.
        </p>
        <CodeViewer language="css">
          {`.Grid1-areaGrid-188 {
  display: grid;
  background-color: rgba(255, 205, 210, 0.1);
  grid-template-rows: 60px 40px 30px 40px 30px 60px;
  grid-template-areas: 
      "header  header header header header header"
      "sidebar ...... ...... ...... ...... ......"
      "sidebar ...... main   main   ...... ......"
      "sidebar ...... main   main   ...... ......"
      "sidebar ...... ...... ...... ...... ......"
      "sidebar footer footer footer footer footer";
  grid-template-columns: 30% 1fr 1fr 1fr 1fr 1fr;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] grid-template-areas`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas`,
      },
      {
        name: `[MDN] grid-area`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area`,
      },
      {
        name: `[MDN] grid-auto-flow`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow`,
      },
      {
        name: `Understanding CSS Grid: Grid Template Areas`,
        url: `https://www.smashingmagazine.com/2020/02/understanding-css-grid-template-areas/`,
      },
      {
        name: `CSS Grid Template Areas In Action`,
        url: `https://ishadeed.com/article/grid-area/`,
      },
      {
        name: `[CSS-TRICKS] A Complete Guide to Grid`,
        url: `https://css-tricks.com/snippets/css/complete-guide-grid/`,
      },
    ],
  },
  {
    question: (
      <span>
        How to make a <code>grid-auto-flow: column</code> grid have same-width
        columns and make a <code>grid-auto-flow: row</code> grid have
        same-height rows?
      </span>
    ),
    answer: (
      <div>
        <p>
          Use <code>grid-auto-columns: 1fr</code> with{' '}
          <code>grid-auto-flow: column</code> grid
        </p>
        <p>
          Use <code>grid-auto-rows: 1fr</code> with{' '}
          <code>grid-auto-flow: row</code> grid
        </p>

        <CodeViewer language="css">
          {`.Grid1-autoGrid-194.horizontal {
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
}

.Grid1-autoGrid-194.vertical {
  grid-auto-flow: row;
  grid-auto-rows: 1fr;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] grid-auto-rows`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows`,
      },
      {
        name: `[MDN] grid-auto-columns`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns`,
      },
      {
        name: `[CSS-TRICKS] A Complete Guide to Grid`,
        url: `https://css-tricks.com/snippets/css/complete-guide-grid/`,
      },
    ],
  },
  {
    question: `How to create a responsive magazine grid layout?`,
    answer: (
      <div>
        <CodeViewer language="css">
          {`.Grid1-fluidGrid-190 {
  display: grid;
  grid-gap: 24px 32px;
  grid-auto-flow: dense row;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.Grid1-fluidGridCell-191 {
  color: white;
  height: 100%;
  display: flex;
  font-size: 32px;
  min-height: 64px;
  align-items: center;
  justify-content: center;
}

.Grid1-fluidGridCell-191:nth-of-type(17n + 5) {
  grid-column: 2 / -1;
}

.Grid1-fluidGridCell-191:nth-of-type(31n + 11) {
  height: 128px;
  grid-column: 1 / -2;
  background-color: #e65100;
}

@media (max-width: 540px) {
  .Grid1-fluidGridCell-191 {
    grid-column: 1 !important;
  }
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[CSS-TRICKS] Responsive Grid Magazine Layout in Just 20 Lines of CSS`,
        url: `https://css-tricks.com/responsive-grid-magazine-layout-in-just-20-lines-of-css/`,
      },
      {
        name: `[CSS-TRICKS] A Complete Guide to Grid`,
        url: `https://css-tricks.com/snippets/css/complete-guide-grid/`,
      },
    ],
  },
];

export default questions;
