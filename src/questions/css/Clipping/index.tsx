import React, { FC, memo } from 'react';
import Question from 'components/Question';
import Section from './Section';
import questions from './questions';
import classes from './styles.module.scss';

export const Clipping1Impl: FC = () => (
  <Question title="Clipping 1" questions={questions}>
    <div className={classes.Container}>
      <Section imageClassName="" />
      <Section imageClassName={classes.Inset1} />
      <Section imageClassName={classes.Inset2} />
      <Section imageClassName={classes.Circle1} />
      <Section imageClassName={classes.Circle2} />
      <Section imageClassName={classes.Ellipse1} />
      <Section imageClassName={classes.Ellipse2} />
      <Section imageClassName={classes.Polygon1} />
      <Section imageClassName={classes.Polygon2} />
      <Section imageClassName={classes.Url1} />
      <Section imageClassName={classes.Transition} />
      <Section imageClassName={classes.Animation} />
    </div>
    <svg width="0" height="0">
      <defs>
        <clipPath id="myClip">
          <circle cx="60" cy="60" r="60" />
          <circle cx="160" cy="100" r="84" />
        </clipPath>
      </defs>
    </svg>
  </Question>
);

const Clipping1 = memo(Clipping1Impl);
Clipping1.displayName = 'Clipping1';
export default Clipping1;
