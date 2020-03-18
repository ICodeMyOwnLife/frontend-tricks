import React, { FC, memo } from 'react';
import { SliderProps, Slider } from '@material-ui/core';
import { BaseColor } from 'utils/colors/BaseColor';
import { useColorSlider } from './utils';
import useStyles, { GradientStop } from './styles';

export const ColorSliderComponent: FC<ColorSliderProps> = ({
  thumbColorCreator,
  defaultValue,
  gradientStops,
  onChange,
  value,
  ...props
}) => {
  const { handleChange, thumbColor } = useColorSlider({
    thumbColorCreator,
    defaultValue,
    onChange,
    value,
  });
  const classes = useStyles({ gradientStops, thumbColor });

  return (
    <Slider
      {...props}
      classes={classes}
      defaultValue={defaultValue}
      onChange={handleChange}
      valueLabelDisplay="off"
    />
  );
};

const ColorSlider = memo(ColorSliderComponent);
ColorSlider.displayName = 'ColorSlider';
export default ColorSlider;

export interface ColorSliderProps
  extends OmitFrom<SliderProps, 'classes' | 'valueLabelDisplay'> {
  thumbColorCreator: (value: number) => BaseColor;
  defaultValue: number;
  gradientStops: GradientStop[];
}
