import { colorHexToRGB } from './colorHexToRGB';
import { colorRGBToHex } from './colorRGBToHex';

/**
 * Calculates a corresponding hex color (EX: #fffff) based on the given background color and transparency value.
 */
export function calculateTransparentColor(foregroundColor: string, backgroundColor: string, opacity: number) {
  if (opacity < 0.0 || opacity > 1.0) {
    console.error('assertion, opacity should be between 0 and 1');
  }

  opacity = opacity * 1.0; // to make it float

  const foregroundRGB = colorHexToRGB(foregroundColor);
  const backgroundRGB = colorHexToRGB(backgroundColor);

  const red = Math.round(backgroundRGB!.r * (1 - opacity) + foregroundRGB!.r * opacity);
  const green = Math.round(backgroundRGB!.g * (1 - opacity) + foregroundRGB!.g * opacity);
  const blue = Math.round(backgroundRGB!.b * (1 - opacity) + foregroundRGB!.b * opacity);

  return colorRGBToHex(red, green, blue)!;
}
