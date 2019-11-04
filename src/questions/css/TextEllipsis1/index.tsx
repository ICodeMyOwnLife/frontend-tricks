import React, { FC, memo } from 'react';
import clsx from 'clsx';
import QuestionPage from 'components/QuestionPage';
import questions from './questions';
import classes from './styles.module.scss';

export const TextEllipsis1Impl: FC = () => (
  <QuestionPage title="Text Ellipsis 1" questions={questions}>
    <table className={clsx(classes.Table, classes.Table1)}>
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

    <table className={clsx(classes.Table, classes.Table2)}>
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
  </QuestionPage>
);

const TextEllipsis1 = memo(TextEllipsis1Impl);
TextEllipsis1.displayName = 'TextEllipsis1';
export default TextEllipsis1;
