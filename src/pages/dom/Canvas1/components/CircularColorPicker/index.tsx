import React, { FC, memo, useRef } from 'react';
import clsx from 'clsx';
import { useDebounceValue } from 'cb-hooks';
import useMuiSlider from 'hooks/useMuiSlider';
import { BaseColor } from 'utils/colors/BaseColor';
import ColorPicker, { ColorPickerProps } from '../ColorPicker';
import BrightnessSlider from '../BrightnessSlider';
import { paletteBackground, getMousePoint } from './utils';
import useStyles from './styles';

const defaultBrightness = 1;
const createBrightnessColor = (brightness: number) =>
  new BaseColor(0, 0, 0, 1 - brightness);
const defaultBrightnessColor = createBrightnessColor(defaultBrightness);

export const CircularColorPickerComponent: FC<CircularColorPickerProps> = ({
  className,
  paletteDiameter = 280,
  ...props
}) => {
  const classes = useStyles();
  const [brightness, , handleChangeBrightness] = useMuiSlider<number>(
    defaultBrightness,
  );
  const brightnessColor =
    useDebounceValue(createBrightnessColor, [brightness], 200) ??
    defaultBrightnessColor;
  const elementRef = useRef<HTMLDivElement>(null);

  return (
    <ColorPicker
      {...props}
      canvasRenderTrigger={brightnessColor}
      className={clsx(classes.root, className)}
      colorPickerClassName={classes.colorPicker}
      getMousePoint={getMousePoint}
      elementRef={elementRef}
      palette={
        <div
          className={classes.colorPickerPalette}
          ref={elementRef}
          style={{
            width: paletteDiameter,
            height: paletteDiameter,
            backgroundImage: paletteBackground(brightnessColor),
            borderRadius: '50%',
          }}
        />
      }
      paletteHeight={paletteDiameter}
      paletteWidth={paletteDiameter}
      slider={
        <BrightnessSlider
          onChange={handleChangeBrightness}
          orientation="vertical"
          value={brightness}
        />
      }
    />
  );
};

const CircularColorPicker = memo(CircularColorPickerComponent);
CircularColorPicker.displayName = 'CircularColorPicker';
export default CircularColorPicker;

export interface CircularColorPickerProps
  extends OmitFrom<
    ColorPickerProps,
    | 'canvasRenderTrigger'
    | 'colorPickerClassName'
    | 'elementRef'
    | 'getMousePoint'
    | 'palette'
    | 'paletteHeight'
    | 'paletteWidth'
    | 'slider'
  > {
  paletteDiameter?: number;
}
