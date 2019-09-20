(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[14],{329:function(e,n,i){"use strict";i.r(n);var t=i(0),o=i.n(t),r=i(33),a=i(89),l=i.n(a),s=Object(t.memo)(function(e){var n=e.type;return o.a.createElement("div",{className:l.a[n]})});s.displayName="Shape";var $=s,d=Object(t.memo)(function(e){var n=e.name,i=e.type;return o.a.createElement("div",{className:l.a.ShapeContainer},o.a.createElement("h4",{className:l.a.Title},n),o.a.createElement($,{type:i}))});d.displayName="ShapeContainer";var h=d,c=i(35),m=[{question:o.a.createElement("p",null,"How to create shapes using only one ",o.a.createElement("code",null,"div"),"?"),answer:o.a.createElement(c.a,{language:"scss"},"@mixin shape($color) {\n  display: inline-block;\n  background-color: $color;\n}\n\n@mixin emptyShape {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  background-color: transparent;\n}\n\n@mixin rectangle($width, $height, $color) {\n  @include shape($color);\n  width: $width;\n  height: $height;\n}\n\n@mixin square($sideDimension, $color) {\n  @include rectangle($sideDimension, $sideDimension, $color);\n}\n\n@mixin oval($width, $height, $color) {\n  @include rectangle($width, $height, $color);\n  border-radius: 100%;\n}\n\n@mixin circle($diameter, $color) {\n  @include oval($diameter, $diameter, $color);\n}\n\n@mixin isoscelesTriangle($height, $width, $apex, $color) {\n  $adjacentSides: (\n    top: left right,\n    bottom: left right,\n    left: top bottom,\n    right: top bottom,\n  );\n  @include emptyShape();\n  border-#{$apex}: $height solid $color;\n  @each $side in map-get($map: $adjacentSides, $key: $apex) {\n    border-#{$side}: $width/2 solid transparent;\n  }\n}\n\n@mixin equilateralTriangle($height, $apex, $color) {\n  $width: $height / $cos30deg;\n  $radius: $height / (2 * $cos30deg * $cos30deg);\n  @include isoscelesTriangle($height, $width, $apex, $color);\n  @if $apex == top {\n    transform-origin: $width / 2 $height - $radius;\n  } @else if $apex == bottom {\n    transform-origin: $width / 2 $radius;\n  } @else if $apex == right {\n    transform-origin: $radius $width / 2;\n  } @else if $apex == left {\n    transform-origin: $height - $radius $width / 2;\n  }\n}\n\n@mixin rightAngledTriangle($height, $shownSide, $hiddenSide, $color) {\n  @include emptyShape();\n  border-#{$shownSide}: $height solid $color;\n  border-#{$hiddenSide}: $height solid transparent;\n}\n\n@mixin curvedTailArrow($length, $color) {\n  $dimension: $length / 2;\n  @include emptyShape();\n  margin-left: $dimension;\n  border-right: $dimension solid $color;\n  border-top: $dimension solid transparent;\n  transform: rotate(12deg);\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: $dimension;\n    height: $dimension;\n    left: -$dimension * 0.7;\n    top: -$dimension * 1.2;\n    background: transparent;\n    border: 0 solid transparent;\n    border-top: $dimension * 0.4 solid $color;\n    border-radius: 100% 0 0 0;\n    transform: rotate(45deg);\n  }\n}\n\n@mixin trapezoid($upperWidth, $lowerWidth, $height, $color) {\n  $borderWidth: abs(\n      $number: $upperWidth - $lowerWidth,\n    ) / 2;\n  @include shape($color);\n  @if $upperWidth < $lowerWidth {\n    width: $upperWidth;\n    border-bottom: $height solid $color;\n  } @else {\n    width: $lowerWidth;\n    border-top: $height solid $color;\n  }\n  background-color: transparent;\n  border-left: $borderWidth solid transparent;\n  border-right: $borderWidth solid transparent;\n}\n\n@mixin parallelogram($width, $height, $color) {\n  $skewWidth: ($height * $tan20deg) / 2;\n  @include emptyShape();\n  position: relative;\n  margin: 0 $width + $skewWidth $height $skewWidth;\n  transform-origin: $width / 2 $height / 2;\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: $width;\n    height: $height;\n    background-color: $color;\n    transform: skew(-20deg);\n  }\n}\n\n@mixin sixPointsStar($sideDimension, $color) {\n  $height: $sideDimension * $cos30deg;\n  $radius: $sideDimension / $cos30deg / 2;\n  @include equilateralTriangle($height, bottom, $color);\n  position: relative;\n  margin-bottom: $height / 3;\n  transform-origin: 50% $radius;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: $height / 3;\n    left: -$sideDimension / 2;\n    @include equilateralTriangle($height, top, $color);\n  }\n}\n\n@mixin fivePointsStar($sideDimension, $color) {\n  $upperThird: $sideDimension * $tan36deg / 2;\n  $middleThird: $upperThird;\n  $lowerThird: $sideDimension * $cos18deg - $middleThird - $upperThird;\n  $radius: $sideDimension / $sin36deg / 2;\n  @include isoscelesTriangle($middleThird, $sideDimension, top, $color);\n  position: relative;\n  margin: $upperThird 0 $lowerThird;\n  transform-origin: 50% $radius - ($upperThird + $middleThird);\n\n  &::before,\n  &::after {\n    top: -$middleThird - $upperThird;\n    content: '';\n    position: absolute;\n  }\n\n  &::before {\n    left: 0;\n    @include isoscelesTriangle($middleThird, $sideDimension, left, $color);\n    transform: rotate(18deg);\n    transform-origin: 0 0;\n  }\n\n  &::after {\n    left: -$middleThird;\n    @include isoscelesTriangle($middleThird, $sideDimension, right, $color);\n    transform: rotate(-18deg);\n    transform-origin: 100% 0;\n  }\n}\n\n@mixin pentagon($sideDimension, $color) {\n  $width: $sideDimension + 2 * $sideDimension * $sin18deg;\n  $height: $sideDimension * $cos18deg;\n  $top: $sideDimension * $sin36deg;\n  $radius: $sideDimension / 2 / $sin36deg;\n  @include isoscelesTriangle($top, $width, bottom, $color);\n  position: relative;\n  margin-bottom: $height;\n  transform-origin: 50% $radius;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: $top;\n    left: -$width / 2;\n    @include trapezoid($width, $sideDimension, $height, $color);\n  }\n}\n\n@mixin hexagon($sideDimension, $color) {\n  $width: $sideDimension * $cos30deg * 2;\n  @include rectangle($width, $sideDimension, $color);\n  position: relative;\n  margin: $sideDimension / 2 0;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n  }\n\n  &::before {\n    top: -$sideDimension/2;\n    @include isoscelesTriangle($sideDimension / 2, $width, bottom, $color);\n  }\n\n  &::after {\n    top: $sideDimension;\n    @include isoscelesTriangle($sideDimension / 2, $width, top, $color);\n  }\n}\n\n@mixin octagon($sideDimension, $color) {\n  $sideBorder: $sideDimension * $cos45deg;\n  $width: $sideDimension + 2 * $sideBorder;\n  @include rectangle($width, $sideDimension, $color);\n  position: relative;\n  margin: $sideBorder 0;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n  }\n\n  &::before {\n    top: -$sideBorder;\n    @include trapezoid($sideDimension, $width, $sideBorder, $color);\n  }\n\n  &::after {\n    top: $sideDimension;\n    @include trapezoid($width, $sideDimension, $sideBorder, $color);\n  }\n}\n\n@mixin heart($height, $color) {\n  $halfWidth: $height * 5/8;\n  @include emptyShape();\n  position: relative;\n  display: inline-block;\n  margin: $height * 0.0375 $height * 1.25 $height * 1.0375 0;\n  transform-origin: $halfWidth;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    width: $halfWidth;\n    height: $height;\n    top: 0;\n    background-color: $color;\n    border-radius: $halfWidth $halfWidth 0 0;\n  }\n\n  &::before {\n    left: $halfWidth;\n    transform-origin: 0 100%;\n    transform: rotate(-45deg);\n  }\n\n  &::after {\n    left: 0;\n    transform-origin: 100% 100%;\n    transform: rotate(45deg);\n  }\n}\n\n@mixin infinity($diameter, $color) {\n  @include emptyShape();\n  position: relative;\n  margin: 0 $diameter * 3.6 $diameter * 5/3 0;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    width: $diameter;\n    height: $diameter;\n    border: $diameter/3 solid $colorPrimary;\n    transform: rotate(-45deg);\n  }\n\n  &::before {\n    left: 0;\n    border-radius: 100% 100% 0;\n  }\n\n  &::after {\n    left: $diameter * 1.9;\n    border-radius: 0 100% 100%;\n  }\n}\n\n@mixin diamondSquare($sideDimension, $color) {\n  $width: $sideDimension / $cos45deg;\n  @include emptyShape();\n  position: relative;\n  margin: ($width - $sideDimension) / 2 ($width + $sideDimension) / 2\n    ($width + $sideDimension) / 2 ($width - $sideDimension) / 2;\n  transform-origin: $sideDimension / 2 $sideDimension / 2;\n\n  &::after {\n    content: '';\n    position: absolute;\n    @include square($sideDimension, $color);\n    transform: rotate(45deg);\n  }\n}\n\n@mixin diamondShield($height, $color) {\n  $width: $height * 4/5 / $cos30deg;\n  @include isoscelesTriangle($height/5, $width, bottom, $color);\n  position: relative;\n  margin-bottom: $height * 4/5;\n  transform-origin: 50% $height / 2;\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: -$width / 2;\n    top: $height/5;\n    @include isoscelesTriangle($height * 4/5, $width, top, $color);\n  }\n}\n\n@mixin diamondNarrow($sideDimension, $color) {\n  $height: $sideDimension * $cos30deg;\n  @include equilateralTriangle($height, bottom, $color);\n  position: relative;\n  margin-bottom: $height;\n  transform-origin: 50% $height;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: $height;\n    left: -$sideDimension / 2;\n    @include equilateralTriangle($height, top, $color);\n  }\n}\n\n@mixin cutDiamond($sideDimension, $color) {\n  $lowerHeight: $sideDimension * $cos30deg;\n  $upperHeight: $lowerHeight / 3.2;\n  $upperWidth: $sideDimension * 2 / 3;\n  @include trapezoid($upperWidth, $sideDimension, $upperHeight, $color);\n  position: relative;\n  margin-bottom: $lowerHeight;\n  transform-origin: 50% ($upperHeight + $lowerHeight) / 2;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: $upperHeight;\n    left: ($upperWidth - $sideDimension) / 2;\n    @include equilateralTriangle($lowerHeight, top, $color);\n  }\n}\n\n@mixin egg($height, $isUpward, $color) {\n  $width: $height * 0.8;\n  @include shape($color);\n  width: $width;\n  height: $height;\n  @if $isUpward {\n    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;\n  } @else {\n    border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;\n  }\n}\n\n@mixin pacman($diameter, $direction, $color) {\n  @include emptyShape();\n  border: $diameter / 2 solid $color;\n  border-#{$direction}-color: transparent;\n  border-radius: 50%;\n}\n\n@mixin talkBubble($width, $height, $color) {\n  $arrowHeight: 20px;\n  $borderRadius: 12px;\n  @include shape($color);\n  position: relative;\n  width: $width;\n  height: $height;\n  border-radius: $borderRadius;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: $height;\n    right: $width / 4;\n    @include equilateralTriangle($arrowHeight, top, $color);\n  }\n}\n\n@mixin twelvePointsBurst($sideDimension, $color) {\n  $margin: $sideDimension * $sqrt5 / (3 + $sqrt5) / 2;\n  @include square($sideDimension, $color);\n  position: relative;\n  margin: $margin;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    @include square($sideDimension, $color);\n  }\n\n  &::before {\n    transform: rotate(-30deg);\n  }\n\n  &::after {\n    transform: rotate(30deg);\n  }\n}\n\n@mixin eightPointsBurst($sideDimension, $color) {\n  $margin: $sideDimension / (2 + 2 / $cos45deg);\n  @include square($sideDimension, $color);\n  position: relative;\n  margin: $margin;\n\n  &::after {\n    content: '';\n    position: absolute;\n    @include square($sideDimension, $color);\n    transform: rotate(45deg);\n  }\n}\n\n@mixin yinYang($diameter, $color1, $color2) {\n  $borderWidth: 2px;\n  $innerDiameter: $diameter / 8;\n  $innerBorderWidth: ($diameter / 2 - $innerDiameter) / 2;\n  $top: ($diameter - ($innerDiameter + 2 * $innerBorderWidth)) / 2;\n  @include shape($color1);\n  position: relative;\n  width: $diameter;\n  height: $diameter / 2;\n  background-color: $color2;\n  border: $borderWidth solid $color1;\n  border-bottom-width: $diameter / 2 + $borderWidth;\n  border-radius: 50%;\n  box-sizing: content-box;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n  }\n\n  &::before {\n    @include circle($innerDiameter, $color2);\n    top: $top;\n    left: 0;\n    border: $innerBorderWidth solid $color1;\n  }\n\n  &::after {\n    @include circle($innerDiameter, $color1);\n    top: $top;\n    right: 0;\n    border: $innerBorderWidth solid $color2;\n  }\n}\n\n@mixin badgeRibbon($diameter, $color) {\n  $triangleHeight: $diameter * 0.7;\n  $triangleWidth: $diameter * 0.8;\n  $bottom: $diameter * 0.28;\n  @include circle($diameter, $color);\n  position: relative;\n  margin-bottom: $bottom;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    top: $diameter / 2;\n  }\n\n  &::before {\n    @include isoscelesTriangle($triangleHeight, $triangleWidth, left, $color);\n    left: $diameter / 4;\n    transform: rotate(12deg);\n    transform-origin: 0 0;\n  }\n\n  &::after {\n    @include isoscelesTriangle($triangleHeight, $triangleWidth, right, $color);\n    right: $diameter / 4;\n    transform: rotate(-12deg);\n    transform-origin: 100% 0;\n  }\n}\n\n@mixin spaceInvader($pixel, $color) {\n  @include shape($color);\n  margin: $pixel * 3 $pixel * 5 $pixel * 4;\n  box-shadow: 0 0 0 1 * $pixel $color, 0 1 * $pixel 0 1 * $pixel $color,\n    -2.5 * $pixel 1.5 * $pixel 0 0.5 * $pixel $color,\n    2.5 * $pixel 1.5 * $pixel 0 0.5 * $pixel $color,\n    -3 * $pixel -3 * $pixel 0 0 $color, 3 * $pixel -3 * $pixel 0 0 $color,\n    -2 * $pixel -2 * $pixel 0 0 $color, 2 * $pixel -2 * $pixel 0 0 $color,\n    -3 * $pixel -1 * $pixel 0 0 $color, -2 * $pixel -1 * $pixel 0 0 $color,\n    2 * $pixel -1 * $pixel 0 0 $color, 3 * $pixel -1 * $pixel 0 0 $color,\n    -4 * $pixel 0 0 0 $color, -3 * $pixel 0 0 0 $color, 3 * $pixel 0 0 0 $color,\n    4 * $pixel 0 0 0 $color, -5 * $pixel 1 * $pixel 0 0 $color,\n    -4 * $pixel 1 * $pixel 0 0 $color, 4 * $pixel 1 * $pixel 0 0 $color,\n    5 * $pixel 1 * $pixel 0 0 $color, -5 * $pixel 2 * $pixel 0 0 $color,\n    5 * $pixel 2 * $pixel 0 0 $color, -5 * $pixel 3 * $pixel 0 0 $color,\n    -3 * $pixel 3 * $pixel 0 0 $color, 3 * $pixel 3 * $pixel 0 0 $color,\n    5 * $pixel 3 * $pixel 0 0 $color, -2 * $pixel 4 * $pixel 0 0 $color,\n    -1 * $pixel 4 * $pixel 0 0 $color, 1 * $pixel 4 * $pixel 0 0 $color,\n    2 * $pixel 4 * $pixel 0 0 $color;\n  width: 1 * $pixel;\n  height: 1 * $pixel;\n}\n\n@mixin tvScreen($height, $color) {\n  $width: $height * 4/3;\n  @include shape($color);\n  position: relative;\n  margin: 0 $height / 15;\n  width: $width;\n  height: $height;\n  border-radius: 50% / 10%;\n\n  &::after {\n    @include shape($color);\n    content: '';\n    position: absolute;\n    top: 10%;\n    bottom: 10%;\n    left: -5%;\n    right: -5%;\n    border-radius: 5% / 50%;\n  }\n}\n\n@mixin chevron($height, $color) {\n  $width: $height * 1.3;\n  $skewAngle: 10deg;\n  $skewHeight: $width * $tan10deg / 2;\n  @include emptyShape();\n  position: relative;\n  margin: $skewHeight $width * 2 $height + $skewHeight 0;\n  transform-origin: $width 0;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    width: $width;\n    height: $height;\n    top: $skewHeight;\n    background-color: $color;\n  }\n\n  &::before {\n    left: 0;\n    transform-origin: 100% 0;\n    transform: skewY($skewAngle);\n  }\n\n  &::after {\n    left: $width;\n    transform-origin: 0 0;\n    transform: skewY(-$skewAngle);\n  }\n}\n\n@mixin magnifyingGlass($diameter, $color) {\n  $thickness: $diameter / 5;\n  $innerDiameter: $diameter - 2 * $thickness;\n  $handleLength: $diameter / 2 + $thickness;\n  $margin: $diameter * 0.275;\n  @include emptyShape();\n  position: relative;\n  width: $innerDiameter;\n  height: $innerDiameter;\n  margin: 0 $margin $margin 0;\n  border: $thickness solid $color;\n  border-radius: 50%;\n\n  &::after {\n    @include rectangle($handleLength, $thickness, $color);\n    content: '';\n    position: absolute;\n    left: $diameter - 2 * $thickness;\n    top: ($diameter - 3 * $thickness) / 2;\n    transform-origin: -($diameter / 2 - $thickness) $thickness / 2;\n    transform: rotateZ(45deg);\n  }\n}\n\n@mixin moon($diameter, $color) {\n  $thickness: $diameter * 0.1875;\n  $innerDiameter: $diameter - $thickness;\n  @include emptyShape();\n  width: $innerDiameter;\n  height: $innerDiameter;\n  margin: $thickness * -1 $thickness $thickness $thickness * -1;\n  border-radius: 50%;\n  box-shadow: $thickness $thickness 0 0 $color;\n}\n\n@mixin flag($width, $color) {\n  $top: $width / 2;\n  $bottom: $width / 4;\n  @include emptyShape();\n  border-width: $top $width / 2 $bottom;\n  border-style: solid;\n  border-color: $color $color transparent;\n}\n\n@mixin cone($width, $height, $color) {\n  @include emptyShape();\n  border-width: $height $width / 2 0;\n  border-style: solid;\n  border-color: $color transparent transparent;\n  border-radius: 50%;\n}\n\n@mixin cross($length, $color) {\n  $thickness: $length / 5;\n  $side: ($length - $thickness) / 2;\n  @include rectangle($thickness, $length, $color);\n  position: relative;\n  margin: 0 $side;\n\n  &::after {\n    @include rectangle($length, $thickness, $color);\n    content: '';\n    position: absolute;\n    left: -$side;\n    top: $side;\n  }\n}\n\n@mixin base($width, $color) {\n  $height: $width * 0.5;\n  $top: $width * 0.3;\n  @include rectangle($width, $height, $color);\n  position: relative;\n  margin-top: $top;\n\n  &::before {\n    @include isoscelesTriangle($top, $width, bottom, $color);\n    content: '';\n    position: absolute;\n    top: -$top;\n    left: 0;\n  }\n}\n\n@mixin pointer($width, $height, $color) {\n  @include emptyShape();\n  position: relative;\n  width: $width;\n  border-top: $height solid $color;\n  border-bottom: $height solid $color;\n  border-left: $height solid transparent;\n\n  &::after {\n    @include isoscelesTriangle($height, $height * 2, left, $color);\n    content: '';\n    position: absolute;\n    top: -$height;\n    right: -$height;\n  }\n}\n\n@mixin lock($width, $color) {\n  $holeWidth: $width / 6;\n  $holeHeight: $width / 2.8;\n  $loopWidth: $width / 2.2;\n  $loopHeight: $width / 2.5;\n  $thickness: $width / 6;\n  @include emptyShape();\n  position: relative;\n  width: $holeWidth;\n  height: $holeHeight;\n  margin-top: $loopHeight + $thickness;\n  border-style: solid;\n  border-color: $color;\n  border-width: $thickness ($width - $holeWidth) / 2;\n  border-radius: 16%;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n  }\n\n  &::before {\n    @include emptyShape();\n    top: -($loopHeight + 2 * $thickness);\n    left: -(($loopWidth - $holeWidth) / 2 + $thickness);\n    width: $loopWidth;\n    height: $loopHeight;\n    border: $thickness solid $color;\n    border-radius: 50% 50% 0 0;\n  }\n\n  &::after {\n    top: -$thickness;\n    left: -$thickness;\n    width: $holeWidth;\n    height: $holeHeight;\n    border: $thickness solid $color;\n    border-radius: 50%/36%;\n  }\n}"),references:[{name:"[CSS-TRICKS] The Shapes of CSS",url:"https://css-tricks.com/the-shapes-of-css/"}]}];i.d(n,"Shapes1Impl",function(){return p});var p=function(){return o.a.createElement(r.a,{title:"Shapes 1",questions:m},o.a.createElement(h,{name:"Rectangle",type:"rectangle"}),o.a.createElement(h,{name:"Square",type:"square"}),o.a.createElement(h,{name:"Oval",type:"oval"}),o.a.createElement(h,{name:"Circle",type:"circle"}),o.a.createElement(h,{name:"Triangle Up",type:"triangleUp"}),o.a.createElement(h,{name:"Triangle Down",type:"triangleDown"}),o.a.createElement(h,{name:"Triangle Left",type:"triangleLeft"}),o.a.createElement(h,{name:"Triangle Right",type:"triangleRight"}),o.a.createElement(h,{name:"Triangle Top Left",type:"triangleTopLeft"}),o.a.createElement(h,{name:"Triangle Top Right",type:"triangleTopRight"}),o.a.createElement(h,{name:"Triangle Bottom Left",type:"triangleBottomLeft"}),o.a.createElement(h,{name:"Triangle Bottom Right",type:"triangleBottomRight"}),o.a.createElement(h,{name:"Curved Tail Arrow",type:"curvedTailArrow"}),o.a.createElement(h,{name:"Trapezoid",type:"trapezoid"}),o.a.createElement(h,{name:"Parallelogram",type:"parallelogram"}),o.a.createElement(h,{name:"6-Points Star",type:"sixPointsStar"}),o.a.createElement(h,{name:"5-Points Star",type:"fivePointsStar"}),o.a.createElement(h,{name:"Pentagon",type:"pentagon"}),o.a.createElement(h,{name:"Hexagon",type:"hexagon"}),o.a.createElement(h,{name:"Octagon",type:"octagon"}),o.a.createElement(h,{name:"Heart",type:"heart"}),o.a.createElement(h,{name:"Infinity",type:"infinity"}),o.a.createElement(h,{name:"Diamond Square",type:"diamondSquare"}),o.a.createElement(h,{name:"Diamond Shield",type:"diamondShield"}),o.a.createElement(h,{name:"Diamond Narrow",type:"diamondNarrow"}),o.a.createElement(h,{name:"Cut Diamond",type:"cutDiamond"}),o.a.createElement(h,{name:"Egg",type:"egg"}),o.a.createElement(h,{name:"Pac-Man",type:"pacman"}),o.a.createElement(h,{name:"Talk Bubble",type:"talkBubble"}),o.a.createElement(h,{name:"12-Points Burst",type:"twelvePointsBurst"}),o.a.createElement(h,{name:"8-Points Burst",type:"eightPointsBurst"}),o.a.createElement(h,{name:"Yin Yang",type:"yinYang"}),o.a.createElement(h,{name:"Badge Ribbon",type:"badgeRibbon"}),o.a.createElement(h,{name:"Space Invader",type:"spaceInvader"}),o.a.createElement(h,{name:"TV Screen",type:"tvScreen"}),o.a.createElement(h,{name:"Chevron",type:"chevron"}),o.a.createElement(h,{name:"Magnifying Glass",type:"magnifyingGlass"}),o.a.createElement(h,{name:"Moon",type:"moon"}),o.a.createElement(h,{name:"Flag",type:"flag"}),o.a.createElement(h,{name:"Cone",type:"cone"}),o.a.createElement(h,{name:"Cross",type:"cross"}),o.a.createElement(h,{name:"Base",type:"base"}),o.a.createElement(h,{name:"Pointer",type:"pointer"}),o.a.createElement(h,{name:"Lock",type:"lock"}))},g=Object(t.memo)(p);g.displayName="Shapes1";n.default=g},33:function(e,n,i){"use strict";var t=i(0),o=i.n(t),r=i(34),a=i.n(r),l=Object(t.memo)(function(e){var n=e.title,i=e.questions,t=e.children;return o.a.createElement("div",{className:a.a.Container},o.a.createElement("h2",{className:a.a.Title},n),o.a.createElement("div",{className:a.a.Content},t),o.a.createElement("div",{className:a.a.Questions},o.a.createElement("h3",null,"Questions"),o.a.createElement("div",null,i.map(function(e,n){var i=e.question,t=e.answer,r=e.references;return o.a.createElement("details",{key:n},o.a.createElement("summary",{className:a.a.Question},o.a.createElement("span",{className:a.a.Index},n+1,".")," ",i),o.a.createElement("div",{className:a.a.Answer},t),r&&r.length&&o.a.createElement("div",{className:a.a.References},o.a.createElement("h4",null,"References"),o.a.createElement("ol",null,r.map(function(e){var n=e.name,i=e.url;return o.a.createElement("li",{key:i},o.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},n))}))))}))))});l.displayName="Question",n.a=l},34:function(e,n,i){e.exports={Container:"styles_Container__12Mbc",Title:"styles_Title__2qxOI",Content:"styles_Content__2wB8J",Questions:"styles_Questions__1t11e",Question:"styles_Question__3wRhS",Index:"styles_Index__1JqtT",Answer:"styles_Answer__2snZe",References:"styles_References__2N6Wn"}},35:function(e,n,i){"use strict";var t=i(0),o=i.n(t),r=i(37),a=i.n(r),l=i(349),s=i(348),$=i(36),d=i.n($),h=Object(t.memo)(function(e){var n=e.className,i=e.children,t=e.style,r=void 0===t?s.a:t,$=e.language;return o.a.createElement("div",{className:a()(d.a.Code,n)},o.a.createElement(l.a,{language:$,style:r},i))});h.displayName="Code",n.a=h},36:function(e,n,i){e.exports={Code:"styles_Code__2Axvp"}},89:function(e,n,i){e.exports={StyleEditor:"styles_StyleEditor__2cYxn",ShapeContainer:"styles_ShapeContainer__1bYhE",Title:"styles_Title__19YcD",rectangle:"styles_rectangle__VgIyx",rotateY:"styles_rotateY__3KDxE",square:"styles_square__2wwS9",rotateZ:"styles_rotateZ__3oIVN",oval:"styles_oval__303r2",circle:"styles_circle__2dCWq",triangleUp:"styles_triangleUp__3lUkx",triangleDown:"styles_triangleDown__1bIAR",triangleLeft:"styles_triangleLeft__HhGZZ",triangleRight:"styles_triangleRight__1giBy",triangleTopLeft:"styles_triangleTopLeft__2C4YA",triangleTopRight:"styles_triangleTopRight__tw7k2",triangleBottomLeft:"styles_triangleBottomLeft__3GZVF",triangleBottomRight:"styles_triangleBottomRight__10UHf",curvedTailArrow:"styles_curvedTailArrow__17FXX",trapezoid:"styles_trapezoid__19A7X",parallelogram:"styles_parallelogram__1m7sL",sixPointsStar:"styles_sixPointsStar__2bcSG",fivePointsStar:"styles_fivePointsStar__1NO4C",pentagon:"styles_pentagon__1u9VF",hexagon:"styles_hexagon__yS3z_",octagon:"styles_octagon__3tYaY",heart:"styles_heart__2YSb1",infinity:"styles_infinity__knX-m",diamondSquare:"styles_diamondSquare__o5UGI",diamondShield:"styles_diamondShield__128h_",diamondNarrow:"styles_diamondNarrow__3VMr4",cutDiamond:"styles_cutDiamond__2DEa_",egg:"styles_egg__1zUMZ",pacman:"styles_pacman__3yHlg",talkBubble:"styles_talkBubble__1XrwH",twelvePointsBurst:"styles_twelvePointsBurst__3KW1x",eightPointsBurst:"styles_eightPointsBurst__u_wL4",yinYang:"styles_yinYang__66clu",badgeRibbon:"styles_badgeRibbon__1FSwL",spaceInvader:"styles_spaceInvader__Bn3Ia",tvScreen:"styles_tvScreen__3AsEA",chevron:"styles_chevron__Ug7uB",magnifyingGlass:"styles_magnifyingGlass__unViJ",moon:"styles_moon__USWKB",flag:"styles_flag__1uNO7",cone:"styles_cone__GPrPJ",cross:"styles_cross__1eZPq",base:"styles_base__1L5sX",pointer:"styles_pointer__Imbhm",lock:"styles_lock__14WVX",rotateX:"styles_rotateX__2nY54"}}}]);
//# sourceMappingURL=14.75ad160b.chunk.js.map