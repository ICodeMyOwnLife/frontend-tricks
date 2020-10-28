import CodeViewer from 'components/CodeViewer';
import React from 'react';
import { QuestionInfo } from 'types/app-common';

const questions: QuestionInfo[] = [
  {
    question: `How to create a rounded-corner table?`,
    answer: (
      <div>
        <p>
          Solution 1: Using <code>box-shadow</code> to disguise table border
        </p>
        <p>
          <b>Caveat:</b> outset <code>box-shadow</code> with take up outer
          space. To solve this problem we need to put our table inside a
          container with <code>padding</code> set to the value of border width
        </p>
        <CodeViewer language="css">
          {`.RoundedTable1-wrapper-199 {
  padding: 2px;
}

.RoundedTable1-root-200 {
  border: 2px solid transparent;
  overflow: hidden;
  box-shadow: 0 0 0 2px white;
  border-radius: 12px;
  border-collapse: collapse;
}

.RoundedTable1-root-200 th, .RoundedTable1-root-200 td {
  border: 1px solid #bdbdbd;
}`}
        </CodeViewer>

        <p>
          Solution 2: Using <code>background-color</code> to disguise table
          border
        </p>
        <p>
          <b>Caveat:</b> We need to set <code>background-color</code> of{' '}
          <code>thead</code> and <code>tbody</code> to override the{' '}
          <code>background-color</code> of the <code>table</code>
        </p>
        <CodeViewer language="css">
          {`.RoundedTable2-root-202 {
  border: 2px solid transparent;
  overflow: hidden;
  border-radius: 12px;
  border-collapse: collapse;
  background-color: white;
}

.RoundedTable2-root-202 th, .RoundedTable2-root-202 td {
  border: 1px solid #bdbdbd;
}

.RoundedTable2-body-203 {
  background-color: #424242;
}`}
        </CodeViewer>

        <p>Solution 3: Using real border</p>
        <p>This should be the most preferred way</p>
        <CodeViewer language="css">
          {`.RoundedTable3-root-205 {
  border: 2px solid white;
  overflow: hidden;
  border-radius: 12px;
  border-spacing: 0;
  border-collapse: separate;
}

.RoundedTable3-root-205 th, .RoundedTable3-root-205 td {
  border-top: 1px solid #bdbdbd;
  border-left: 1px solid #bdbdbd;
}

.RoundedTable3-root-205 thead tr:first-child th {
  border-top: 0;
}

.RoundedTable3-root-205 tr th:first-child, .RoundedTable3-root-205 tr td:first-child {
  border-left: 0;
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[stackoverflow] Rounded table corners CSS only`,
        url: `https://stackoverflow.com/questions/4932181/rounded-table-corners-css-only#answer-11273086`,
      },
    ],
  },
  {
    question: `How to create sticky header table?`,
    answer: (
      <div>
        <p>
          Use <code>position: sticky</code> with <code>top: 0</code>
        </p>
        <CodeViewer language="css">
          {`.StickyHeaderTable-root-206 {
  width: 100%;
  position: relative;
  border-spacing: 0;
  border-collapse: collapse;
}

.StickyHeaderTable-root-206 td, .StickyHeaderTable-root-206 th {
  padding: 8px;
  text-align: center;
}

.StickyHeaderTable-root-206 th {
  top: 0;
  color: white;
  z-index: 1;
  position: sticky;
  background-color: #7b0e0e;
}

.StickyHeaderTable-root-206 td {
  position: relative;
  border-bottom: 1px solid #bcbcbc;
}

.StickyHeaderTable-root-206 tr:not(:first-of-type) th {
  border-top: 1px solid #bcbcbc;
}

.StickyHeaderTable-root-206 tr td:first-of-type, .StickyHeaderTable-root-206 tr td:last-of-type {
  border-bottom: 0;
}

.StickyHeaderTable-root-206 tr th:first-of-type, .StickyHeaderTable-root-206 tr td:first-of-type {
  padding-left: 16px;
}

.StickyHeaderTable-root-206 tr th:last-of-type, .StickyHeaderTable-root-206 tr td:last-of-type {
  padding-right: 16px;
}

.StickyHeaderTable-root-206 tr td:first-of-type::before, .StickyHeaderTable-root-206 tr td:last-of-type::before {
  bottom: -1px;
  height: 0;
  content: "";
  position: absolute;
  border-bottom: 1px solid #bcbcbc;
}

.StickyHeaderTable-root-206 tr td:first-of-type::before {
  left: 16px;
  right: 0;
}

.StickyHeaderTable-root-206 tr td:last-of-type::before {
  left: 0;
  right: 16px;
}`}
        </CodeViewer>
      </div>
    ),
  },
];

export default questions;
