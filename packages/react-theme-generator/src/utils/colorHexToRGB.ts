const COLOR_REGEX = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;

/**
 * Converts a given hex color (EX: #fffff) to RGB (EX: rgb(255,255,255))
 *
 * @param hexColor
 */
export function colorHexToRGB(hexColor: string) {
  const arrayRGB = hexColor.match(COLOR_REGEX);

  if (arrayRGB !== null) {
    return {
      r: parseInt(arrayRGB[1], 16),
      g: parseInt(arrayRGB[2], 16),
      b: parseInt(arrayRGB[3], 16),
    };
  } else {
    console.error('Invalid color. Received: ' + arrayRGB);
  }
}
