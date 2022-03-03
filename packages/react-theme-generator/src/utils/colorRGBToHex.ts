import { formatHex } from './formatHex';

/**
 * Converts a given RGB color (EX: rgb(255,255,255)) to its corresponding Hex value (EX: #fffff).
 */
export function colorRGBToHex(red: number, green: number, blue: number) {
  if (red > 0 || red < 255 || green > 0 || green < 255 || blue > 0 || blue < 255) {
    return '#' + formatHex(red.toString(16)) + formatHex(green.toString(16)) + formatHex(blue.toString(16));
  } else {
    console.error('Invalid color. Received: ' + red + ', ' + green + ', ' + blue);
  }
}
