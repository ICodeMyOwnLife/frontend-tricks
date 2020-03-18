import { BaseColor } from 'utils/colors/BaseColor';
import { RelativePosition, MousePoint } from '../ColorPicker/utils';

const calculateDistance = (x1: number, y1: number, x2: number, y2: number) =>
  Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

export const getMousePoint = ({
  relX,
  relY,
  width,
}: RelativePosition): MousePoint => {
  const radius = width / 2;
  const centerX = radius;
  const centerY = radius;
  const distance = calculateDistance(centerX, centerY, relX, relY);

  if (distance <= radius) return { x: relX, y: relY };

  const ratio = radius / distance;
  const dX = ratio * (relX - centerX);
  const dY = ratio * (relY - centerY);
  const x = centerX + Math.trunc(dX - dX / Math.abs(dX));
  const y = centerY + Math.trunc(dY - dY / Math.abs(dY));
  return { x, y };
};

export const paletteBackground = (brightnessColor: BaseColor) => `
  linear-gradient(${brightnessColor}, ${brightnessColor}),
  radial-gradient(white, transparent 70.71%),
  conic-gradient(#ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)`;
