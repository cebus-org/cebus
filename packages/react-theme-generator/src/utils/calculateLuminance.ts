import { colorHexToRGB } from './colorHexToRGB';
/**
 * Calculates the luminance of a given Hex color.
 */
export function calculateLuminance(hexColor: string) {
  const rgbColor = colorHexToRGB(hexColor)!;

  const color = [rgbColor!.r, rgbColor!.b, rgbColor!.g].map(function (value) {
    value /= 255;
    return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
  });

  return color[0] * 0.2126 + color[1] * 0.7152 + color[2] * 0.0722;
}
