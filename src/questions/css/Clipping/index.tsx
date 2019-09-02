import React, { FC, memo } from 'react';
import Question from 'components/Question';
import questions from './questions';
import imgSrc from './1.jpg';
import classes from './styles.module.scss';

export const Clipping1Impl: FC = () => (
  <Question title="Clipping 1" questions={questions}>
    <div className={classes.Container}>
      <div className={classes.ImageContainer}>
        <img className={classes.Inset1} src={imgSrc} alt="wild" />
      </div>

      <div className={classes.ImageContainer}>
        <img className={classes.Inset2} src={imgSrc} alt="wild" />
      </div>

      <div className={classes.ImageContainer}>
        <img className={classes.Circle1} src={imgSrc} alt="wild" />
      </div>

      <div className={classes.ImageContainer}>
        <img className={classes.Circle2} src={imgSrc} alt="wild" />
      </div>

      <div className={classes.ImageContainer}>
        <img className={classes.Ellipse1} src={imgSrc} alt="wild" />
      </div>

      <div className={classes.ImageContainer}>
        <img className={classes.Ellipse2} src={imgSrc} alt="wild" />
      </div>

      <div className={classes.ImageContainer}>
        <img className={classes.Polygon1} src={imgSrc} alt="wild" />
      </div>

      <div className={classes.ImageContainer}>
        <img className={classes.Polygon2} src={imgSrc} alt="wild" />
      </div>
    </div>
  </Question>
);

const Clipping1 = memo(Clipping1Impl);
Clipping1.displayName = 'Clipping1';
export default Clipping1;
