import React, { FC, memo, ReactNode, RefObject } from 'react';
import clsx from 'clsx';
import { BaseColor } from 'utils/colors/BaseColor';
import { preventDefault } from 'utils/events';
import { useColorPicker, RelativePosition, MousePoint } from './utils';
import useStyles from './styles';

export const ColorPickerComponent: FC<ColorPickerProps> = ({
  canvasRenderTrigger,
  className,
  colorPickerClassName,
  onChange,
  elementRef,
  getMousePoint,
  palette,
  paletteHeight,
  paletteWidth,
  showCanvas,
  slider,
}) => {
  const classes = useStyles();
  const {
    canvasRef,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    hoverColor,
    mousePoint,
    selectedColor,
  } = useColorPicker({
    deps: [canvasRenderTrigger],
    elementRef,
    getMousePoint,
    onChange,
  });

  return (
    <div className={clsx(classes.root, className)}>
      <div
        className={clsx(classes.colorPicker, colorPickerClassName)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {palette}
        <span
          className={classes.colorPickerThumb}
          onDragStart={preventDefault}
          style={{
            left: mousePoint?.x,
            top: mousePoint?.y,
          }}
        />
      </div>
      {slider}
      <div className={classes.colorTable}>
        <div className={classes.colorRow}>
          <span
            className={classes.colorCell}
            style={{ background: selectedColor?.toString() }}
          />
          <span
            className={classes.colorCell}
            style={{ backgroundColor: hoverColor?.toString() }}
          />
        </div>
      </div>
      <canvas
        className={classes.canvas}
        height={paletteHeight}
        hidden={showCanvas !== true}
        ref={canvasRef}
        width={paletteWidth}
      />
    </div>
  );
};

const ColorPicker = memo(ColorPickerComponent);
ColorPicker.displayName = 'ColorPicker';
export default ColorPicker;

export interface ColorPickerProps {
  canvasRenderTrigger: any;
  className?: string;
  colorPickerClassName?: string;
  elementRef: RefObject<HTMLElement>;
  getMousePoint: (position: RelativePosition) => MousePoint;
  onChange?: (color: BaseColor) => void;
  palette: ReactNode;
  paletteWidth: number;
  paletteHeight: number;
  showCanvas?: boolean;
  slider: ReactNode;
}
