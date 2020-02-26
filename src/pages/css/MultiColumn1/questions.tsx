/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to create static Masonry layout with Multi-column?`,
    answer: (
      <div>
        <p>
          Use <code>column-count</code> and set item's <code>display</code> to{' '}
          <code>inline-block</code> or <code>break-inside</code> to{' '}
          <code>avoid</code>
        </p>
        <CodeViewer language="css">
          {`.MultiColumn1-masonry-176 {
  column-gap: 16px;
  column-count: 5;
  background-color: #e0e0e0;
}
.MultiColumn1-masonryItemPanel1-177 {
  break-inside: avoid;
}
.MultiColumn1-masonryItemPanel2-178 {
  width: 100%;
  display: inline-block;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[CSS-TRICKS] Approaches for a CSS Masonry Layout`,
        url: `https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/#article-header-id-0`,
      },
      {
        name: `Creating a Responsive Pure CSS Masonry Layout`,
        url: `https://w3bits.com/css-masonry/`,
      },
      {
        name: `HOW TO: Pure CSS masonry layouts`,
        url: `https://codeburst.io/how-to-pure-css-masonry-layouts-a8ede07ba31a`,
      },
      {
        name: `[MDN] Multiple-column layout`,
        url: `https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout`,
      },
      {
        name: `[MDN] Using multi-column layouts`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns/Using_multi-column_layouts`,
      },
      {
        name: `[CSS-TRICKS] break-inside`,
        url: `https://css-tricks.com/almanac/properties/b/break-inside/`,
      },
    ],
  },
];

export default questions;
