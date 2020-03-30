export const calculateMod = (value: number, dividend: number) =>
  value - Math.floor(value / dividend) * dividend;

export const floatToByte = (value: number) => Math.round(value * 255);

export const floatToHexString = (value: number) =>
  floatToByte(value).toString(16).padStart(2, '0');

export const floatToPercentageString = (value: number) =>
  `${(value * 100).toFixed(2)}%`;

export const getHueComponents = (hueValue: number) => {
  const hueMod = calculateMod(hueValue, 360);
  const huePercentage = hueMod / 60;
  const hueBase = Math.floor(huePercentage);
  let red = 0;
  let green = 0;
  let blue = 0;

  switch (hueBase) {
    case 0: // #ff0000 -> #ffff00
      red = 1;
      green = huePercentage - hueBase;
      blue = 0;
      break;

    case 1: // #ffff00 -> #00ff00
      red = 1 - (huePercentage - hueBase);
      green = 1;
      blue = 0;
      break;

    case 2: // #00ff00 -> #00ffff
      red = 0;
      green = 1;
      blue = huePercentage - hueBase;
      break;

    case 3: // #00ffff -> #0000ff
      red = 0;
      green = 1 - (huePercentage - hueBase);
      blue = 1;
      break;

    case 4: // #0000ff -> #ff00ff
      red = huePercentage - hueBase;
      green = 0;
      blue = 1;
      break;

    case 5: // #ff00ff -> #ff0000
      red = 1;
      green = 0;
      blue = 1 - (huePercentage - hueBase);
      break;

    default:
      break;
  }

  return { red, green, blue };
};
