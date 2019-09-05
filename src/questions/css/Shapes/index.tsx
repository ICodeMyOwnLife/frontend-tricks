import React, { FC, memo } from 'react';
import Question from 'components/Question';
import Shape from './Shape';
import questions from './questions';
import classes from './styles.module.scss';

export const Shapes1Impl: FC = () => (
  <Question title="Shapes 1" questions={questions}>
    <Shape name="Rectangle" className={classes.rectangle} />
    <Shape name="Square" className={classes.square} />
    <Shape name="Oval" className={classes.oval} />
    <Shape name="Circle" className={classes.circle} />
    <Shape name="Triangle Up" className={classes.triangleUp} />
    <Shape name="Triangle Down" className={classes.triangleDown} />
    <Shape name="Triangle Left" className={classes.triangleLeft} />
    <Shape name="Triangle Right" className={classes.triangleRight} />
    <Shape name="Triangle Top Left" className={classes.triangleTopLeft} />
    <Shape name="Triangle Top Right" className={classes.triangleTopRight} />
    <Shape name="Triangle Bottom Left" className={classes.triangleBottomLeft} />
    <Shape
      name="Triangle Bottom Right"
      className={classes.triangleBottomRight}
    />
    <Shape name="Curved Tail Arrow" className={classes.curvedTailArrow} />
    <Shape name="Trapezoid" className={classes.trapezoid} />
    <Shape name="Parallelogram" className={classes.parallelogram} />
    <Shape name="Six-Points Star" className={classes.sixPointsStar} />
    <Shape name="Five-Points Star" className={classes.fivePointsStar} />
    <Shape name="Pentagon" className={classes.pentagon} />
    <Shape name="Hexagon" className={classes.hexagon} />
    <Shape name="Octagon" className={classes.octagon} />
    <Shape name="Heart" className={classes.heart} />
    <Shape name="Infinity" className={classes.infinity} />
    <Shape name="Diamond Square" className={classes.diamondSquare} />
    <Shape name="Diamond Shield" className={classes.diamondShield} />
    <Shape name="Diamond Narrow" className={classes.diamondNarrow} />
    <Shape name="Cut Diamond" className={classes.cutDiamond} />
    <Shape name="Egg" className={classes.egg} />
    <Shape name="Pac-Man" className={classes.pacman} />
    <Shape name="Talk Bubble" className={classes.talkBubble} />
    <Shape name="Twelve-Points Burst" className={classes.twelvePointsBurst} />
  </Question>
);

const Shapes1 = memo(Shapes1Impl);
Shapes1.displayName = 'Shapes1';
export default Shapes1;
