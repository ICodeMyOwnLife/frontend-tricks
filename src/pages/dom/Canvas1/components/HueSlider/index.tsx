import React, { FC, memo } from 'react';
import { HueColor } from 'utils/colors/HueColor';
import ColorSlider, { ColorSliderProps } from '../ColorSlider';
import { GradientStop } from '../ColorSlider/styles';

const gradientStops: GradientStop[] = [
  { color: '#ff0000' },
  { color: '#ffff00' },
  { color: '#00ff00' },
  { color: '#00ffff' },
  { color: '#0000ff' },
  { color: '#ff00ff' },
  { color: '#ff0000' },
];

const thumbColorCreator = (value: number) => new HueColor(value);

export const HueSliderComponent: FC<HueSliderProps> = props => (
  <ColorSlider
    {...props}
    defaultValue={360}
    gradientStops={gradientStops}
    max={360}
    min={0}
    step={0.05}
    thumbColorCreator={thumbColorCreator}
  />
);

const HueSlider = memo(HueSliderComponent);
HueSlider.displayName = 'HueSlider';
export default HueSlider;

export interface HueSliderProps
  extends OmitFrom<
    ColorSliderProps,
    | 'defaultValue'
    | 'gradientStops'
    | 'max'
    | 'min'
    | 'step'
    | 'thumbColorCreator'
  > {}
