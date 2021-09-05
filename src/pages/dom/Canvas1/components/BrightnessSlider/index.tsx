import { FC, memo } from 'react';
import { BaseColor } from 'utils/colors/BaseColor';
import ColorSlider, { ColorSliderProps } from '../ColorSlider';
import { GradientStop } from '../ColorSlider/styles';

const gradientStops: GradientStop[] = [{ color: 'black' }, { color: 'white' }];

const thumbColorCreator = (value: number) => new BaseColor(value, value, value);

export const BrightnessSliderComponent: FC<BrightnessSliderProps> = props => (
  <ColorSlider
    {...props}
    defaultValue={1}
    gradientStops={gradientStops}
    max={1}
    min={0}
    step={0.02}
    thumbColorCreator={thumbColorCreator}
  />
);

const BrightnessSlider = memo(BrightnessSliderComponent);
BrightnessSlider.displayName = 'BrightnessSlider';
export default BrightnessSlider;

export interface BrightnessSliderProps
  extends OmitFrom<
    ColorSliderProps,
    | 'defaultValue'
    | 'gradientStops'
    | 'max'
    | 'min'
    | 'step'
    | 'thumbColorCreator'
  > {}
