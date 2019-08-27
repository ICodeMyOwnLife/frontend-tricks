import React, { FC, memo } from 'react';
import Question from 'components/Question';
import questions from './questions';
import classes from './styles.module.scss';

export const FlexOverflow1Impl: FC = () => (
  <Question title="Flew Overflow 1" questions={questions}>
    <div className={classes.Container}>
      <div className={classes.LeftBar} />
      <div className={classes.RightBar}>
        <div className={classes.LeftColumn} />
        <div className={classes.RightColumn}>
          <div className={classes.LongBlock} />
        </div>
      </div>
    </div>
  </Question>
);

const FlexOverflow1 = memo(FlexOverflow1Impl);
FlexOverflow1.displayName = 'FlexOverflow1';
export default FlexOverflow1;
