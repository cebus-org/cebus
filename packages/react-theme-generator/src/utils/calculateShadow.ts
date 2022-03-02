import { colorHexToRGB } from './colorHexToRGB';
import { invertColor } from './invertColor';

/**
 * Calculates a corresponding rgb color (EX: rgb(0, 0, 0, 0.5)) based on the given canvas color and transparency value.
 */
export function calculateShadow(foregroundColor: string, opacity: number) {
  if (opacity < 0.0 || opacity > 1.0) {
    console.error('assertion, opacity should be between 0 and 1');
  }

  opacity = opacity * 1.0; // to make it float

  const invertedForegroundRGB = colorHexToRGB(invertColor(foregroundColor));

  const red = Math.round(invertedForegroundRGB!.r);
  const green = Math.round(invertedForegroundRGB!.g);
  const blue = Math.round(invertedForegroundRGB!.b);

  return `rgb(${red},${green},${blue},${opacity})`;
}
