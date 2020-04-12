/* eslint-disable react/no-unescaped-entities */
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
        <p>
          <b>Notice:</b> The <code>scroll-margin-top</code> setting won't work
          when <code>overflow: hidden</code> is set on the item.
        </p>
        <CodeViewer language="css">
          {`.Scroll1-scrollMargin-184 {
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
      {
        name: `How to animate scrolling to anchor links with one line of CSS`,
        url: `https://gomakethings.com/how-to-animate-scrolling-to-anchor-links-with-one-line-of-css/`,
      },
    ],
  },
  {
    question: `How to style the scroll target?`,
    answer: (
      <div>
        <p>
          Use <code>:target</code> pseudo-class
        </p>
        <p>
          The <code>:target</code> CSS pseudo-class represents a unique element
          (the target element) with an id matching the URL's fragment.
        </p>
        <CodeViewer language="css">
          {`@-webkit-keyframes ScrollTarget-keyframes-highlight-7 {
  from {
    outline-color: transparent;
    outline-width: 0;
  }
  to {
    outline-color: #fdd835;
    outline-width: 2px;
    background-color: #6d4c41;
  }
}

.ScrollTarget-post-8 {
  border: 1px solid #6d4c41;
  margin: 0px 24px 24px;
  padding: 16px 24px 24px;
  background-color: #3e2723;
  scroll-margin-top: 64px;
  scroll-snap-align: start;
}

.ScrollTarget-post-8:target {
  animation: ScrollTarget-keyframes-highlight-7 1s ease 0.3s alternate 2;
  outline-style: solid;
  outline-width: 0;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] :target`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/:target`,
      },
      {
        name: `[MDN] Using the :target pseudo-class in selectors`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors/Using_the_%3Atarget_pseudo-class_in_selectors`,
      },
    ],
  },
  {
    question: `How to lock the viewport to certain elements or locations when scrolling?`,
    answer: (
      <div>
        <ol>
          <li>
            The container should have <code>scroll-snap-type</code> set to{' '}
            <code>
              [ x | y | block | inline | both ] [ mandatory | proximity ]?
            </code>{' '}
            and may need <code>overflow: auto</code>
          </li>
          <li>
            The items should have <code>scroll-snap-align</code> set to{' '}
            <code>[ start | end | center ]{`{(1, 2)}`}</code>
          </li>
        </ol>

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

        <CodeViewer language="css">
          {`.FullPageScrollSnapping-root-3 {
  max-height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}

.FullPageScrollSnapping-pageGroup-4 {
  display: grid;
  max-width: 100vw;
  overflow-x: auto;
  grid-auto-flow: column;
  scroll-snap-type: x mandatory;
  grid-auto-columns: 1fr;
  scroll-snap-align: center;
}

.FullPageScrollSnapping-page-5 {
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: center;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[CSS-TRICKS] Practical CSS Scroll Snapping`,
        url: `https://css-tricks.com/practical-css-scroll-snapping/`,
      },
      {
        name: `Full Page Scroll-Snapping HTML Sections`,
        url: `https://www.bram.us/2020/03/18/full-page-scroll-snapping-html-sections/`,
      },
      {
        name: `How to use CSS Scroll Snap`,
        url: `https://blog.logrocket.com/how-to-use-css-scroll-snap/`,
      },
      {
        name: `[MDN] scroll-snap-type`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type`,
      },
      {
        name: `[MDN] scroll-snap-align`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align`,
      },
      {
        name: `[MDN] CSS Scroll Snap`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap`,
      },
    ],
  },
  {
    question: `How to control scroll chaining and page refreshing when scrolling over the boundaries of a container?`,
    answer: (
      <div>
        <p>
          Use <code>overscroll-behavior</code>
        </p>
        <p>
          The <code>overscroll-behavior</code> CSS property sets what a browser
          does when reaching the boundary of a scrolling area. It's a shorthand
          for <code>overscroll-behavior-x</code> and{' '}
          <code>overscroll-behavior-y</code>
        </p>
      </div>
    ),
    references: [
      {
        name: `[MDN] overscroll-behavior`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior`,
      },
    ],
  },
];

export default questions;
