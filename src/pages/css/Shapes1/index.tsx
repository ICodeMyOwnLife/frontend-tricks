import { FC, memo } from 'react';
import QuestionPage from 'components/QuestionPage';
import ShapeContainer from './ShapeContainer';
import questions from './questions';

export const Shapes1Component: FC = () => (
  <QuestionPage title="Shapes 1" questions={questions}>
    <ShapeContainer name="Rectangle" type="rectangle" />
    <ShapeContainer name="Square" type="square" />
    <ShapeContainer name="Oval" type="oval" />
    <ShapeContainer name="Circle" type="circle" />
    <ShapeContainer name="Triangle Up" type="triangleUp" />
    <ShapeContainer name="Triangle Down" type="triangleDown" />
    <ShapeContainer name="Triangle Left" type="triangleLeft" />
    <ShapeContainer name="Triangle Right" type="triangleRight" />
    <ShapeContainer name="Triangle Top Left" type="triangleTopLeft" />
    <ShapeContainer name="Triangle Top Right" type="triangleTopRight" />
    <ShapeContainer name="Triangle Bottom Left" type="triangleBottomLeft" />
    <ShapeContainer name="Triangle Bottom Right" type="triangleBottomRight" />
    <ShapeContainer name="Curved Tail Arrow" type="curvedTailArrow" />
    <ShapeContainer name="Trapezoid" type="trapezoid" />
    <ShapeContainer name="Parallelogram" type="parallelogram" />
    <ShapeContainer name="6-Points Star" type="sixPointsStar" />
    <ShapeContainer name="5-Points Star" type="fivePointsStar" />
    <ShapeContainer name="Pentagon" type="pentagon" />
    <ShapeContainer name="Hexagon" type="hexagon" />
    <ShapeContainer name="Octagon" type="octagon" />
    <ShapeContainer name="Heart" type="heart" />
    <ShapeContainer name="Infinity" type="infinity" />
    <ShapeContainer name="Diamond Square" type="diamondSquare" />
    <ShapeContainer name="Diamond Shield" type="diamondShield" />
    <ShapeContainer name="Diamond Narrow" type="diamondNarrow" />
    <ShapeContainer name="Cut Diamond" type="cutDiamond" />
    <ShapeContainer name="Egg" type="egg" />
    <ShapeContainer name="Pac-Man" type="pacman" />
    <ShapeContainer name="Talk Bubble" type="talkBubble" />
    <ShapeContainer name="12-Points Burst" type="twelvePointsBurst" />
    <ShapeContainer name="8-Points Burst" type="eightPointsBurst" />
    <ShapeContainer name="Yin Yang" type="yinYang" />
    <ShapeContainer name="Badge Ribbon" type="badgeRibbon" />
    <ShapeContainer name="Space Invader" type="spaceInvader" />
    <ShapeContainer name="TV Screen" type="tvScreen" />
    <ShapeContainer name="Chevron" type="chevron" />
    <ShapeContainer name="Magnifying Glass" type="magnifyingGlass" />
    <ShapeContainer name="Moon" type="moon" />
    <ShapeContainer name="Flag" type="flag" />
    <ShapeContainer name="Cone" type="cone" />
    <ShapeContainer name="Cross" type="cross" />
    <ShapeContainer name="Base" type="base" />
    <ShapeContainer name="Pointer" type="pointer" />
    <ShapeContainer name="Lock" type="lock" />
  </QuestionPage>
);

const Shapes1 = memo(Shapes1Component);
Shapes1.displayName = 'Shapes1';
export default Shapes1;

/**
 * TODO:
 * 1. hourglass
 * 1. use clip-path to create more shape
 */
