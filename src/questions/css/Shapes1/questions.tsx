import { QuestionInfo } from 'types/app-common';
import React from 'react';
import Code from 'components/Code';

const questions: QuestionInfo[] = [
  {
    question: (
      <p>
        How to create shapes using only one <code>div</code>?
      </p>
    ),
    answer: (
      <Code language="scss">
        {`@mixin shape($color) {
  display: inline-block;
  background-color: $color;
}

@mixin emptyShape {
  display: inline-block;
  width: 0;
  height: 0;
  background-color: transparent;
}

@mixin rectangle($width, $height, $color) {
  @include shape($color);
  width: $width;
  height: $height;
}

@mixin square($sideDimension, $color) {
  @include rectangle($sideDimension, $sideDimension, $color);
}

@mixin oval($width, $height, $color) {
  @include rectangle($width, $height, $color);
  border-radius: 100%;
}

@mixin circle($diameter, $color) {
  @include oval($diameter, $diameter, $color);
}

@mixin isoscelesTriangle($height, $width, $apex, $color) {
  $adjacentSides: (
    top: left right,
    bottom: left right,
    left: top bottom,
    right: top bottom,
  );
  @include emptyShape();
  border-#{$apex}: $height solid $color;
  @each $side in map-get($map: $adjacentSides, $key: $apex) {
    border-#{$side}: $width/2 solid transparent;
  }
}

@mixin equilateralTriangle($height, $apex, $color) {
  $width: $height / $cos30deg;
  $radius: $height / (2 * $cos30deg * $cos30deg);
  @include isoscelesTriangle($height, $width, $apex, $color);
  @if $apex == top {
    transform-origin: $width / 2 $height - $radius;
  } @else if $apex == bottom {
    transform-origin: $width / 2 $radius;
  } @else if $apex == right {
    transform-origin: $radius $width / 2;
  } @else if $apex == left {
    transform-origin: $height - $radius $width / 2;
  }
}

@mixin rightAngledTriangle($height, $shownSide, $hiddenSide, $color) {
  @include emptyShape();
  border-#{$shownSide}: $height solid $color;
  border-#{$hiddenSide}: $height solid transparent;
}

@mixin curvedTailArrow($length, $color) {
  $dimension: $length / 2;
  @include emptyShape();
  margin-left: $dimension;
  border-right: $dimension solid $color;
  border-top: $dimension solid transparent;
  transform: rotate(12deg);

  &::after {
    content: '';
    position: absolute;
    width: $dimension;
    height: $dimension;
    left: -$dimension * 0.7;
    top: -$dimension * 1.2;
    background: transparent;
    border: 0 solid transparent;
    border-top: $dimension * 0.4 solid $color;
    border-radius: 100% 0 0 0;
    transform: rotate(45deg);
  }
}

@mixin trapezoid($upperWidth, $lowerWidth, $height, $color) {
  $borderWidth: abs(
      $number: $upperWidth - $lowerWidth,
    ) / 2;
  @include shape($color);
  @if $upperWidth < $lowerWidth {
    width: $upperWidth;
    border-bottom: $height solid $color;
  } @else {
    width: $lowerWidth;
    border-top: $height solid $color;
  }
  background-color: transparent;
  border-left: $borderWidth solid transparent;
  border-right: $borderWidth solid transparent;
}

@mixin parallelogram($width, $height, $color) {
  $skewWidth: ($height * $tan20deg) / 2;
  @include emptyShape();
  position: relative;
  margin: 0 $width + $skewWidth $height $skewWidth;
  transform-origin: $width / 2 $height / 2;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: $width;
    height: $height;
    background-color: $color;
    transform: skew(-20deg);
  }
}

@mixin sixPointsStar($sideDimension, $color) {
  $height: $sideDimension * $cos30deg;
  $radius: $sideDimension / $cos30deg / 2;
  @include equilateralTriangle($height, bottom, $color);
  position: relative;
  margin-bottom: $height / 3;
  transform-origin: 50% $radius;

  &::after {
    content: '';
    position: absolute;
    top: $height / 3;
    left: -$sideDimension / 2;
    @include equilateralTriangle($height, top, $color);
  }
}

@mixin fivePointsStar($sideDimension, $color) {
  $upperThird: $sideDimension * $tan36deg / 2;
  $middleThird: $upperThird;
  $lowerThird: $sideDimension * $cos18deg - $middleThird - $upperThird;
  $radius: $sideDimension / $sin36deg / 2;
  @include isoscelesTriangle($middleThird, $sideDimension, top, $color);
  position: relative;
  margin: $upperThird 0 $lowerThird;
  transform-origin: 50% $radius - ($upperThird + $middleThird);

  &::before,
  &::after {
    top: -$middleThird - $upperThird;
    content: '';
    position: absolute;
  }

  &::before {
    left: 0;
    @include isoscelesTriangle($middleThird, $sideDimension, left, $color);
    transform: rotate(18deg);
    transform-origin: 0 0;
  }

  &::after {
    left: -$middleThird;
    @include isoscelesTriangle($middleThird, $sideDimension, right, $color);
    transform: rotate(-18deg);
    transform-origin: 100% 0;
  }
}

@mixin pentagon($sideDimension, $color) {
  $width: $sideDimension + 2 * $sideDimension * $sin18deg;
  $height: $sideDimension * $cos18deg;
  $top: $sideDimension * $sin36deg;
  $radius: $sideDimension / 2 / $sin36deg;
  @include isoscelesTriangle($top, $width, bottom, $color);
  position: relative;
  margin-bottom: $height;
  transform-origin: 50% $radius;

  &::after {
    content: '';
    position: absolute;
    top: $top;
    left: -$width / 2;
    @include trapezoid($width, $sideDimension, $height, $color);
  }
}

@mixin hexagon($sideDimension, $color) {
  $width: $sideDimension * $cos30deg * 2;
  @include rectangle($width, $sideDimension, $color);
  position: relative;
  margin: $sideDimension / 2 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    top: -$sideDimension/2;
    @include isoscelesTriangle($sideDimension / 2, $width, bottom, $color);
  }

  &::after {
    top: $sideDimension;
    @include isoscelesTriangle($sideDimension / 2, $width, top, $color);
  }
}

@mixin octagon($sideDimension, $color) {
  $sideBorder: $sideDimension * $cos45deg;
  $width: $sideDimension + 2 * $sideBorder;
  @include rectangle($width, $sideDimension, $color);
  position: relative;
  margin: $sideBorder 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    top: -$sideBorder;
    @include trapezoid($sideDimension, $width, $sideBorder, $color);
  }

  &::after {
    top: $sideDimension;
    @include trapezoid($width, $sideDimension, $sideBorder, $color);
  }
}

@mixin heart($height, $color) {
  $halfWidth: $height * 5/8;
  @include emptyShape();
  position: relative;
  display: inline-block;
  margin: $height * 0.0375 $height * 1.25 $height * 1.0375 0;
  transform-origin: $halfWidth;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: $halfWidth;
    height: $height;
    top: 0;
    background-color: $color;
    border-radius: $halfWidth $halfWidth 0 0;
  }

  &::before {
    left: $halfWidth;
    transform-origin: 0 100%;
    transform: rotate(-45deg);
  }

  &::after {
    left: 0;
    transform-origin: 100% 100%;
    transform: rotate(45deg);
  }
}

@mixin infinity($diameter, $color) {
  @include emptyShape();
  position: relative;
  margin: 0 $diameter * 3.6 $diameter * 5/3 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: $diameter;
    height: $diameter;
    border: $diameter/3 solid $colorPrimary;
    transform: rotate(-45deg);
  }

  &::before {
    left: 0;
    border-radius: 100% 100% 0;
  }

  &::after {
    left: $diameter * 1.9;
    border-radius: 0 100% 100%;
  }
}

@mixin diamondSquare($sideDimension, $color) {
  $width: $sideDimension / $cos45deg;
  @include emptyShape();
  position: relative;
  margin: ($width - $sideDimension) / 2 ($width + $sideDimension) / 2
    ($width + $sideDimension) / 2 ($width - $sideDimension) / 2;
  transform-origin: $sideDimension / 2 $sideDimension / 2;

  &::after {
    content: '';
    position: absolute;
    @include square($sideDimension, $color);
    transform: rotate(45deg);
  }
}

@mixin diamondShield($height, $color) {
  $width: $height * 4/5 / $cos30deg;
  @include isoscelesTriangle($height/5, $width, bottom, $color);
  position: relative;
  margin-bottom: $height * 4/5;
  transform-origin: 50% $height / 2;

  &::after {
    content: '';
    position: absolute;
    left: -$width / 2;
    top: $height/5;
    @include isoscelesTriangle($height * 4/5, $width, top, $color);
  }
}

@mixin diamondNarrow($sideDimension, $color) {
  $height: $sideDimension * $cos30deg;
  @include equilateralTriangle($height, bottom, $color);
  position: relative;
  margin-bottom: $height;
  transform-origin: 50% $height;

  &::after {
    content: '';
    position: absolute;
    top: $height;
    left: -$sideDimension / 2;
    @include equilateralTriangle($height, top, $color);
  }
}

@mixin cutDiamond($sideDimension, $color) {
  $lowerHeight: $sideDimension * $cos30deg;
  $upperHeight: $lowerHeight / 3.2;
  $upperWidth: $sideDimension * 2 / 3;
  @include trapezoid($upperWidth, $sideDimension, $upperHeight, $color);
  position: relative;
  margin-bottom: $lowerHeight;
  transform-origin: 50% ($upperHeight + $lowerHeight) / 2;

  &::after {
    content: '';
    position: absolute;
    top: $upperHeight;
    left: ($upperWidth - $sideDimension) / 2;
    @include equilateralTriangle($lowerHeight, top, $color);
  }
}

@mixin egg($height, $isUpward, $color) {
  $width: $height * 0.8;
  @include shape($color);
  width: $width;
  height: $height;
  @if $isUpward {
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  } @else {
    border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
  }
}

@mixin pacman($diameter, $direction, $color) {
  @include emptyShape();
  border: $diameter / 2 solid $color;
  border-#{$direction}-color: transparent;
  border-radius: 50%;
}

@mixin talkBubble($width, $height, $color) {
  $arrowHeight: 20px;
  $borderRadius: 12px;
  @include shape($color);
  position: relative;
  width: $width;
  height: $height;
  border-radius: $borderRadius;

  &::after {
    content: '';
    position: absolute;
    top: $height;
    right: $width / 4;
    @include equilateralTriangle($arrowHeight, top, $color);
  }
}

@mixin twelvePointsBurst($sideDimension, $color) {
  $margin: $sideDimension * $sqrt5 / (3 + $sqrt5) / 2;
  @include square($sideDimension, $color);
  position: relative;
  margin: $margin;

  &::before,
  &::after {
    content: '';
    position: absolute;
    @include square($sideDimension, $color);
  }

  &::before {
    transform: rotate(-30deg);
  }

  &::after {
    transform: rotate(30deg);
  }
}

@mixin eightPointsBurst($sideDimension, $color) {
  $margin: $sideDimension / (2 + 2 / $cos45deg);
  @include square($sideDimension, $color);
  position: relative;
  margin: $margin;

  &::after {
    content: '';
    position: absolute;
    @include square($sideDimension, $color);
    transform: rotate(45deg);
  }
}

@mixin yinYang($diameter, $color1, $color2) {
  $borderWidth: 2px;
  $innerDiameter: $diameter / 8;
  $innerBorderWidth: ($diameter / 2 - $innerDiameter) / 2;
  $top: ($diameter - ($innerDiameter + 2 * $innerBorderWidth)) / 2;
  @include shape($color1);
  position: relative;
  width: $diameter;
  height: $diameter / 2;
  background-color: $color2;
  border: $borderWidth solid $color1;
  border-bottom-width: $diameter / 2 + $borderWidth;
  border-radius: 50%;
  box-sizing: content-box;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    @include circle($innerDiameter, $color2);
    top: $top;
    left: 0;
    border: $innerBorderWidth solid $color1;
  }

  &::after {
    @include circle($innerDiameter, $color1);
    top: $top;
    right: 0;
    border: $innerBorderWidth solid $color2;
  }
}

@mixin badgeRibbon($diameter, $color) {
  $triangleHeight: $diameter * 0.7;
  $triangleWidth: $diameter * 0.8;
  $bottom: $diameter * 0.28;
  @include circle($diameter, $color);
  position: relative;
  margin-bottom: $bottom;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: $diameter / 2;
  }

  &::before {
    @include isoscelesTriangle($triangleHeight, $triangleWidth, left, $color);
    left: $diameter / 4;
    transform: rotate(12deg);
    transform-origin: 0 0;
  }

  &::after {
    @include isoscelesTriangle($triangleHeight, $triangleWidth, right, $color);
    right: $diameter / 4;
    transform: rotate(-12deg);
    transform-origin: 100% 0;
  }
}

@mixin spaceInvader($pixel, $color) {
  @include shape($color);
  margin: $pixel * 3 $pixel * 5 $pixel * 4;
  box-shadow: 0 0 0 1 * $pixel $color, 0 1 * $pixel 0 1 * $pixel $color,
    -2.5 * $pixel 1.5 * $pixel 0 0.5 * $pixel $color,
    2.5 * $pixel 1.5 * $pixel 0 0.5 * $pixel $color,
    -3 * $pixel -3 * $pixel 0 0 $color, 3 * $pixel -3 * $pixel 0 0 $color,
    -2 * $pixel -2 * $pixel 0 0 $color, 2 * $pixel -2 * $pixel 0 0 $color,
    -3 * $pixel -1 * $pixel 0 0 $color, -2 * $pixel -1 * $pixel 0 0 $color,
    2 * $pixel -1 * $pixel 0 0 $color, 3 * $pixel -1 * $pixel 0 0 $color,
    -4 * $pixel 0 0 0 $color, -3 * $pixel 0 0 0 $color, 3 * $pixel 0 0 0 $color,
    4 * $pixel 0 0 0 $color, -5 * $pixel 1 * $pixel 0 0 $color,
    -4 * $pixel 1 * $pixel 0 0 $color, 4 * $pixel 1 * $pixel 0 0 $color,
    5 * $pixel 1 * $pixel 0 0 $color, -5 * $pixel 2 * $pixel 0 0 $color,
    5 * $pixel 2 * $pixel 0 0 $color, -5 * $pixel 3 * $pixel 0 0 $color,
    -3 * $pixel 3 * $pixel 0 0 $color, 3 * $pixel 3 * $pixel 0 0 $color,
    5 * $pixel 3 * $pixel 0 0 $color, -2 * $pixel 4 * $pixel 0 0 $color,
    -1 * $pixel 4 * $pixel 0 0 $color, 1 * $pixel 4 * $pixel 0 0 $color,
    2 * $pixel 4 * $pixel 0 0 $color;
  width: 1 * $pixel;
  height: 1 * $pixel;
}

@mixin tvScreen($height, $color) {
  $width: $height * 4/3;
  @include shape($color);
  position: relative;
  margin: 0 $height / 15;
  width: $width;
  height: $height;
  border-radius: 50% / 10%;

  &::after {
    @include shape($color);
    content: '';
    position: absolute;
    top: 10%;
    bottom: 10%;
    left: -5%;
    right: -5%;
    border-radius: 5% / 50%;
  }
}

@mixin chevron($height, $color) {
  $width: $height * 1.3;
  $skewAngle: 10deg;
  $skewHeight: $width * $tan10deg / 2;
  @include emptyShape();
  position: relative;
  margin: $skewHeight $width * 2 $height + $skewHeight 0;
  transform-origin: $width 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: $width;
    height: $height;
    top: $skewHeight;
    background-color: $color;
  }

  &::before {
    left: 0;
    transform-origin: 100% 0;
    transform: skewY($skewAngle);
  }

  &::after {
    left: $width;
    transform-origin: 0 0;
    transform: skewY(-$skewAngle);
  }
}

@mixin magnifyingGlass($diameter, $color) {
  $thickness: $diameter / 5;
  $innerDiameter: $diameter - 2 * $thickness;
  $handleLength: $diameter / 2 + $thickness;
  $margin: $diameter * 0.275;
  @include emptyShape();
  position: relative;
  width: $innerDiameter;
  height: $innerDiameter;
  margin: 0 $margin $margin 0;
  border: $thickness solid $color;
  border-radius: 50%;

  &::after {
    @include rectangle($handleLength, $thickness, $color);
    content: '';
    position: absolute;
    left: $diameter - 2 * $thickness;
    top: ($diameter - 3 * $thickness) / 2;
    transform-origin: -($diameter / 2 - $thickness) $thickness / 2;
    transform: rotateZ(45deg);
  }
}

@mixin moon($diameter, $color) {
  $thickness: $diameter * 0.1875;
  $innerDiameter: $diameter - $thickness;
  @include emptyShape();
  width: $innerDiameter;
  height: $innerDiameter;
  margin: $thickness * -1 $thickness $thickness $thickness * -1;
  border-radius: 50%;
  box-shadow: $thickness $thickness 0 0 $color;
}

@mixin flag($width, $color) {
  $top: $width / 2;
  $bottom: $width / 4;
  @include emptyShape();
  border-width: $top $width / 2 $bottom;
  border-style: solid;
  border-color: $color $color transparent;
}

@mixin cone($width, $height, $color) {
  @include emptyShape();
  border-width: $height $width / 2 0;
  border-style: solid;
  border-color: $color transparent transparent;
  border-radius: 50%;
}

@mixin cross($length, $color) {
  $thickness: $length / 5;
  $side: ($length - $thickness) / 2;
  @include rectangle($thickness, $length, $color);
  position: relative;
  margin: 0 $side;

  &::after {
    @include rectangle($length, $thickness, $color);
    content: '';
    position: absolute;
    left: -$side;
    top: $side;
  }
}

@mixin base($width, $color) {
  $height: $width * 0.5;
  $top: $width * 0.3;
  @include rectangle($width, $height, $color);
  position: relative;
  margin-top: $top;

  &::before {
    @include isoscelesTriangle($top, $width, bottom, $color);
    content: '';
    position: absolute;
    top: -$top;
    left: 0;
  }
}

@mixin pointer($width, $height, $color) {
  @include emptyShape();
  position: relative;
  width: $width;
  border-top: $height solid $color;
  border-bottom: $height solid $color;
  border-left: $height solid transparent;

  &::after {
    @include isoscelesTriangle($height, $height * 2, left, $color);
    content: '';
    position: absolute;
    top: -$height;
    right: -$height;
  }
}

@mixin lock($width, $color) {
  $holeWidth: $width / 6;
  $holeHeight: $width / 2.8;
  $loopWidth: $width / 2.2;
  $loopHeight: $width / 2.5;
  $thickness: $width / 6;
  @include emptyShape();
  position: relative;
  width: $holeWidth;
  height: $holeHeight;
  margin-top: $loopHeight + $thickness;
  border-style: solid;
  border-color: $color;
  border-width: $thickness ($width - $holeWidth) / 2;
  border-radius: 16%;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    @include emptyShape();
    top: -($loopHeight + 2 * $thickness);
    left: -(($loopWidth - $holeWidth) / 2 + $thickness);
    width: $loopWidth;
    height: $loopHeight;
    border: $thickness solid $color;
    border-radius: 50% 50% 0 0;
  }

  &::after {
    top: -$thickness;
    left: -$thickness;
    width: $holeWidth;
    height: $holeHeight;
    border: $thickness solid $color;
    border-radius: 50%/36%;
  }
}`}
      </Code>
    ),
    references: [
      {
        name: `[CSS-TRICKS] The Shapes of CSS`,
        url: `https://css-tricks.com/the-shapes-of-css/`,
      },
    ],
  },
];

export default questions;
