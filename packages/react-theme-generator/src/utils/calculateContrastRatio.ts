import { calculateLuminance } from './calculateLuminance';

/**
 * Calculates the contrast ratio of two different hex colors.
 */
export function calculateContrastRatio(hexColor: string, secondHexColor: string) {
  const firstLuminance = calculateLuminance(hexColor);
  const secondLuminance = calculateLuminance(secondHexColor);

  const brightest = Math.max(firstLuminance, secondLuminance);
  const darkest = Math.min(firstLuminance, secondLuminance);

  return (brightest + 0.05) / (darkest + 0.05);
}
