import { colorHexToRGB } from './colorHexToRGB';
import { colorRGBToHex } from './colorRGBToHex';

/**
 * Inverts the given hex color.
 * Example: #ffffff becomes #000000
 */
export function invertColor(hexColor: string) {
  const rgbColor = colorHexToRGB(hexColor);

  const red = Math.round(255 - rgbColor!.r);
  const green = Math.round(255 - rgbColor!.g);
  const blue = Math.round(255 - rgbColor!.b);

  return colorRGBToHex(red, green, blue)!;
}
