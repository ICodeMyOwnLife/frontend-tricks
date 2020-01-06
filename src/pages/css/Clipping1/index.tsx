import React, { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import Section from './Section';
import questions from './questions';
import classes from './styles.module.scss';

export const Clipping1Component: FC = () => (
  <QuestionPage title="Clipping 1" questions={questions}>
    <div className={classes.Container}>
      <Section imageClassName={classes.none} float="right" />
      <Section imageClassName={classes.inset1} />
      <Section imageClassName={classes.inset2} float="right" />
      <Section imageClassName={classes.circle1} />
      <Section imageClassName={classes.circle2} float="right" />
      <Section imageClassName={classes.ellipse1} />
      <Section imageClassName={classes.ellipse2} float="right" />
      <Section imageClassName={classes.polygon1} />
      <Section imageClassName={classes.polygon2} float="right" />
      <Section imageClassName={classes.url1} />
      <Section imageClassName={classes.transition} float="right" />
      <Section imageClassName={classes.animation} />
    </div>
    <svg width="0" height="0">
      <defs>
        <clipPath id="myClip">
          <circle cx="60" cy="60" r="60" />
          <circle cx="160" cy="100" r="84" />
        </clipPath>
      </defs>
    </svg>
  </QuestionPage>
);

const Clipping1 = memo(Clipping1Component);
Clipping1.displayName = 'Clipping1';
export default Clipping1;
