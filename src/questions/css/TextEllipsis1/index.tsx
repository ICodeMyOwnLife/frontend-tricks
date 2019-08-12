import React, { FC, memo } from 'react';
import classnames from 'classnames';
import Question, { QuestionInfo } from 'components/Question';
import classes from './styles.module.scss';

const questions: QuestionInfo[] = [
  {
    question: `Truncate long text in table column and replace with ellipsis?`,
    answer: (
      <div>
        <p>Case 1: Other columns are fixed-width</p>
        <pre>
          <code>
            {`td {
      white-space: nowrap;
      
    &.Td1 {
      max-width: 0; // this column will take the remaining width
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    &.Td4 {
      max-width: 100px; // this column will take 100px
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }`}
          </code>
        </pre>
        <p>Case 2: Other columns are flexible-width</p>
        <pre>
          <code>
            {`td {
      white-space: nowrap;
      
    &.Td1 {
      width: 100%;
      max-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }`}
          </code>
        </pre>
      </div>
    ),
    references: [
      {
        name: `[CSS-TRICKS] Truncate String with Ellipsis`,
        url: `https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/`,
      },
      {
        name: `[CSS-TRICKS] text-overflow`,
        url: `https://css-tricks.com/almanac/properties/t/text-overflow/`,
      },
      {
        name: `[MDN] text-overflow`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow`,
      },
    ],
  },
];

export const TextEllipsis1Impl: FC = () => (
  <Question title="Text Ellipsis 1" questions={questions}>
    <table className={classnames(classes.Table, classes.Table1)}>
      <colgroup>
        <col className={classes.Col1} />
        <col className={classes.Col2} />
        <col className={classes.Col3} />
        <col className={classes.Col4} />
      </colgroup>
      <thead>
        <tr>
          <th>Col 1</th>
          <th>Col 2</th>
          <th>Col 3</th>
          <th>Col 4</th>
        </tr>
      </thead>

      <tbody>
        {[1, 2, 3, 4, 5].map(n => (
          <tr key={n}>
            <td className={classes.Td1}>
              This a very long text and a part of it should be truncated and
              replaced with ellipsis or else the layout is broken.
            </td>
            <td>This is a small text.</td>
            <td>This is a small text.</td>
            <td className={classes.Td4}>This is another quite long text.</td>
          </tr>
        ))}
      </tbody>
    </table>

    <table className={classnames(classes.Table, classes.Table2)}>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Col 2</th>
          <th>Column Header 3</th>
          <th>4</th>
          <th>C5</th>
          <th>#6</th>
          <th>No. 7</th>
        </tr>
      </thead>

      <tbody>
        {[1, 2, 3, 4, 5].map(n => (
          <tr key={n}>
            <td className={classes.Td1}>
              This a very long text and a part of it should be truncated and
              replaced with ellipsis or else the layout is broken.
            </td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
        ))}
      </tbody>
    </table>
  </Question>
);

const TextEllipsis1 = memo(TextEllipsis1Impl);
TextEllipsis1.displayName = 'TextEllipsis1';
export default TextEllipsis1;
