import { FC, memo, useRef } from 'react';
import clsx from 'clsx';
import { useDebounceValue } from 'cb-hooks';
import useMuiSlider from 'hooks/useMuiSlider';
import { HueColor } from 'utils/colors/HueColor';
import ColorPicker, { ColorPickerProps } from '../ColorPicker';
import HueSlider from '../HueSlider';
import { paletteBackground, getMousePoint } from './utils';
import useStyles from './styles';

const defaultHueValue = 0;
const createHueColor = (hueValue: number) => new HueColor(hueValue);
const defaultHueColor = createHueColor(defaultHueValue);

export const RectangularColorPickerComponent: FC<RectangularColorPickerProps> = ({
  className,
  paletteWidth = 320,
  paletteHeight = 200,
  ...props
}) => {
  const classes = useStyles();
  const [hueValue, , handleChangeHueValue] = useMuiSlider<number>(
    defaultHueValue,
  );
  const hueColor =
    useDebounceValue(createHueColor, [hueValue], 200) ?? defaultHueColor;
  const elementRef = useRef<HTMLDivElement>(null);

  return (
    <ColorPicker
      {...props}
      canvasRenderTrigger={hueColor}
      className={clsx(classes.root, className)}
      elementRef={elementRef}
      getMousePoint={getMousePoint}
      palette={
        <div
          className={classes.colorPickerPalette}
          ref={elementRef}
          style={{
            width: paletteWidth,
            height: paletteHeight,
            backgroundImage: paletteBackground(hueColor),
          }}
        />
      }
      paletteHeight={paletteHeight}
      paletteWidth={paletteWidth}
      slider={
        <HueSlider
          onChange={handleChangeHueValue}
          orientation="vertical"
          value={hueValue}
        />
      }
    />
  );
};

const RectangularColorPicker = memo(RectangularColorPickerComponent);
RectangularColorPicker.displayName = 'RectangularColorPicker';
export default RectangularColorPicker;

export interface RectangularColorPickerProps
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
  paletteHeight?: number;
  paletteWidth?: number;
}
