import { BaseColor } from './BaseColor';
import { getHueComponents } from './utils';

export class HueColor extends BaseColor {
  readonly hueValue: number;

  constructor(hueValue = 0, alpha = 1) {
    const { red, green, blue } = getHueComponents(hueValue);
    super(red, green, blue, alpha);
    this.hueValue = hueValue;
  }
}
