import React, { FC, memo } from 'react';
import Question from 'components/Question';
import questions from './questions';
import classes from './styles.module.scss';

export const LiveEdit1Impl: FC = () => (
  <Question title="Live Edit 1" questions={questions}>
    <p contentEditable suppressContentEditableWarning>
      This is text
    </p>
    <style
      className={classes.StyleEditor}
      contentEditable
      draggable
      suppressContentEditableWarning
    >
      .Content &#123;\nbackground-color: red;\n&#125;
    </style>
  </Question>
);

const LiveEdit1 = memo(LiveEdit1Impl);
LiveEdit1.displayName = 'LiveEdit1';
export default LiveEdit1;
