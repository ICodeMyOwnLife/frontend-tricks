import { BaseColor } from 'utils/colors/BaseColor';
import { RelativePosition, MousePoint } from '../ColorPicker/utils';

export const getMousePoint = ({
  relX,
  relY,
  width,
  height,
}: RelativePosition): MousePoint => {
  const x = relX < 0 ? 0 : relX > width ? width - 1 : relX;
  const y = relY < 0 ? 0 : relY > height ? height - 1 : relY;
  return { x, y };
};

export const paletteBackground = (rootColor: BaseColor) => `
  linear-gradient(to bottom, transparent, black),
  linear-gradient(to right, white, ${rootColor})`;
