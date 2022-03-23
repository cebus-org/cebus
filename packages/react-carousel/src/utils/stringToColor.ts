/**
 * Converts a given string to a hex color.
 * Example: Generate an avatar background color based on a given username.
 */
export function stringToColor(string: string) {
  let generatedColor = '#';
  let hash = 0;

  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  for (let i = 0; i < 3; i++) {
    const colorValue = (hash >> (i * 8)) & 0xff;
    generatedColor += ('00' + colorValue.toString(16)).substr(-2);
  }

  return generatedColor;
}
