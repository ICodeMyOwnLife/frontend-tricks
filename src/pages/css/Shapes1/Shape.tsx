import React, { FC, memo } from 'react';
import classes from './styles.module.scss';

export const ShapeImpl: FC<ShapeProps> = ({ type }) => (
  <div className={classes[type]} />
);

const Shape = memo(ShapeImpl);
Shape.displayName = 'Shape';
export default Shape;

export interface ShapeProps {
  type: ShapeType;
}

export type ShapeType =
  | 'rectangle'
  | 'square'
  | 'oval'
  | 'circle'
  | 'triangleUp'
  | 'triangleDown'
  | 'triangleLeft'
  | 'triangleRight'
  | 'triangleTopLeft'
  | 'triangleTopRight'
  | 'triangleBottomLeft'
  | 'triangleBottomRight'
  | 'curvedTailArrow'
  | 'trapezoid'
  | 'parallelogram'
  | 'sixPointsStar'
  | 'fivePointsStar'
  | 'pentagon'
  | 'hexagon'
  | 'octagon'
  | 'heart'
  | 'infinity'
  | 'diamondSquare'
  | 'diamondShield'
  | 'diamondNarrow'
  | 'cutDiamond'
  | 'egg'
  | 'pacman'
  | 'talkBubble'
  | 'twelvePointsBurst'
  | 'eightPointsBurst'
  | 'yinYang'
  | 'badgeRibbon'
  | 'spaceInvader'
  | 'tvScreen'
  | 'chevron'
  | 'magnifyingGlass'
  | 'moon'
  | 'flag'
  | 'cone'
  | 'cross'
  | 'base'
  | 'pointer'
  | 'lock';
