/* eslint-disable no-useless-constructor */
import { floatToPercentageString, floatToHexString } from './utils';

export class BaseColor {
  constructor(
    readonly red: number,
    readonly green: number,
    readonly blue: number,
    readonly alpha = 1,
  ) {}

  toHexString() {
    return `#${this.toHex()}`;
  }

  toRgbaString() {
    return `rgba(
      ${floatToPercentageString(this.red)},
      ${floatToPercentageString(this.green)},
      ${floatToPercentageString(this.blue)},
      ${floatToPercentageString(this.alpha)})`;
  }

  toString(mode: ColorStringMode = 'hex'): string {
    switch (mode) {
      case 'hex':
        return this.toHexString();

      case 'rgba':
        return this.toRgbaString();

      default:
        return this.toHexString();
    }
  }

  valueOf() {
    return parseInt(this.toHex(), 16);
  }

  private toHex() {
    return `${floatToHexString(this.red)}${floatToHexString(
      this.green,
    )}${floatToHexString(this.blue)}${floatToHexString(this.alpha)}`;
  }
}

export type ColorStringMode = 'hex' | 'rgba';
