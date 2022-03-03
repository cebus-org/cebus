import { calculateContrastRatio, calculateTransparentColor, invertColor, calculateShadow } from '../index';
import type { ThemeGeneratorProps, ColorSet, SemanticColors } from './themeGenerator.types';

/**
 * Generates a set of semantic color values that correspond with the given colors.
 */
export const createSemanticColor = <T extends string | number>(
  semanticColors: SemanticColors<T>,
  canvasColor: string,
) => {
  // The any is used here as the colorSet is being changed from SemanticColors to ColorSet.
  const colorSets: any = semanticColors;

  for (const color in semanticColors) {
    const contrastRatio = calculateContrastRatio(semanticColors[color as T], canvasColor);
    if (contrastRatio < 3) {
      console.error(
        'It appears that your color ' +
          color +
          ` (${semanticColors[color as T]}) ` +
          ' has a contrast of ' +
          contrastRatio +
          ` with your canvas background (${canvasColor}). This is below W3 standards of a 3.0 ratio.`,
      );
    }

    colorSets[color + 'Hover'] = calculateTransparentColor(semanticColors[color as T], invertColor(canvasColor), 0.8);
    colorSets[color + 'Pressed'] = calculateTransparentColor(semanticColors[color as T], invertColor(canvasColor), 0.7);
    colorSets[color + 'Background'] = calculateTransparentColor(semanticColors[color as T], canvasColor, 0.25);
    colorSets[color + 'BackgroundDisabled'] = calculateTransparentColor(semanticColors[color as T], canvasColor, 0.6);
    colorSets[color + 'Disabled'] = calculateTransparentColor(semanticColors[color as T], canvasColor, 0.5);
    colorSets[color + 'ForegroundHover'] = calculateTransparentColor(semanticColors[color as T], canvasColor, 0.04);
    colorSets[color + 'ForegroundPressed'] = calculateTransparentColor(semanticColors[color as T], canvasColor, 0.08);
  }

  // Drop shadow theme tokens
  colorSets.elevate =
    `drop-shadow(0 0 2px ${calculateShadow(canvasColor, 0.12)})` +
    `drop-shadow(0 4px 8px ${calculateShadow(canvasColor, 0.14)})`;
  colorSets.hoverShadow = `0px 3px 1px -2px ${calculateShadow(canvasColor, 0.2)}, 0px 2px 2px 0px ${calculateShadow(
    canvasColor,
    0.14,
  )}, 0px 1px 5px 0px ${calculateShadow(canvasColor, 0.12)}`;

  return colorSets as ColorSet<T>;
};

export function themeGenerator<T extends string | number>(props: ThemeGeneratorProps<T>) {
  const { canvasColor, semanticColors } = props;

  const colorSets = createSemanticColor<keyof typeof semanticColors>(semanticColors, canvasColor);

  return {
    textColor: invertColor(canvasColor),
    canvasColor,
    ...colorSets,
  };
}
