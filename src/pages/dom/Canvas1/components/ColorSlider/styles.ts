import { makeStyles, createStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { BaseColor } from 'utils/colors/BaseColor';

const railThickness = 8;
const thumbSize = 18;
const borderColor = grey[400];
const shadowColor = grey[600];

const railBackground = (deg: number, gradientStops: GradientStop[]) =>
  `linear-gradient(${deg}deg, ${gradientStops
    .map(({ color, offset }) => (offset ? `${color} ${offset}` : color))
    .join(', ')})`;

const styles = () =>
  createStyles({
    root: {},
    rail: ({ gradientStops }: ColorSliderStylesProps) => ({
      height: railThickness,
      backgroundImage: railBackground(90, gradientStops),
      opacity: 1,
    }),
    track: {
      display: 'none',
    },
    thumb: ({ thumbColor }: ColorSliderStylesProps) => ({
      width: thumbSize,
      height: thumbSize,
      marginLeft: -thumbSize / 2,
      marginTop: -(thumbSize - railThickness) / 2,
      backgroundColor: thumbColor.toString(),
      border: `1px solid ${borderColor}`,
      boxShadow: `0 0 2px 1px ${shadowColor}`,
      boxSizing: 'border-box',
    }),
    vertical: ({ gradientStops }: ColorSliderStylesProps) => ({
      '& $rail': {
        width: railThickness,
        backgroundImage: railBackground(0, gradientStops),
      },
      '& $thumb': {
        marginLeft: -(thumbSize - railThickness) / 2,
        marginBottom: -thumbSize / 2,
      },
    }),
  });

const useStyles = makeStyles(styles, { name: 'ColorSlider' });

export default useStyles;

export interface ColorSliderStylesProps {
  thumbColor: BaseColor;
  gradientStops: GradientStop[];
}

export interface GradientStop {
  color: string;
  offset?: string;
}
