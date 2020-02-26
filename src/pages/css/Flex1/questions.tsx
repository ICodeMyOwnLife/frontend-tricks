/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: (
      <span>
        What does <code>justify-content</code> does?
      </span>
    ),
    answer: (
      <div>
        <p>
          The CSS <code>justify-content</code> property defines how the browser
          distributes space between and around content items along the main-axis
          of a flex container, and the inline axis of a grid container.
        </p>
      </div>
    ),
    references: [
      {
        name: `[MDN] justify-content`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content`,
      },
    ],
  },
  {
    question: (
      <span>
        What is the difference between <code>align-items</code>,{' '}
        <code>align-content</code> and <code>align-self</code>?
      </span>
    ),
    answer: (
      <div>
        <p>
          <code>align-items</code>: The CSS <code>align-items</code> property
          sets the <code>align-self</code> value on all direct children as a
          group. In Flexbox, it controls the alignment of items on the Cross
          Axis. In Grid Layout, it controls the alignment of items on the Block
          Axis within their grid area.
        </p>
        <p>
          <code>align-content</code>: The CSS <code>align-content</code>{' '}
          property sets the distribution of space between and around content
          items along a flexbox's cross-axis or a grid's block axis.
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
        name: `[MDN] align-items`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/align-items`,
      },
      {
        name: `[MDN] align-content`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/align-content`,
      },
      {
        name: `[MDN] align-self`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,
      },
    ],
  },
  {
    question: `How to create static Masonry layout with Flexbox?`,
    answer: (
      <div>
        <p>
          Use a vertical flexbox with wrapping and fixed heigh or fixed max
          height
        </p>
        <CodeViewer language="css">
          {`.Flex1-masonryFlex-178 {
  display: flex;
  flex-wrap: wrap;
  max-height: 720px;
  align-items: center;
  align-content: space-evenly;
  flex-direction: column;
  justify-content: flex-start;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[CSS-TRICKS] Approaches for a CSS Masonry Layout`,
        url: `https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/#article-header-id-1`,
      },
      {
        name: `HOW TO: Pure CSS masonry layouts`,
        url: `https://codeburst.io/how-to-pure-css-masonry-layouts-a8ede07ba31a`,
      },
    ],
  },
];

export default questions;
