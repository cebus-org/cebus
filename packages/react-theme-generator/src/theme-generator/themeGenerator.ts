import { calculateContrastRatio, calculateTransparentColor, invertColor } from '../index';
import type { ThemeGeneratorProps, ColorSet, SemanticColors } from './themeGenerator.types';

/**
 * Generates a set of semantic color values that correspond with the given colors.
 */
export const createSemanticColor = <T extends string | number>(
  semanticColors: SemanticColors<T>,
  canvasColor: string,
) => {
  const colorSets = semanticColors;

  for (const color in semanticColors) {
    const contrastRatio = calculateContrastRatio(semanticColors[color], canvasColor);
    if (contrastRatio < 3) {
      console.error(
        'It appears that your color ' +
          color +
          ' has a contrast of ' +
          contrastRatio +
          ' with your canvas background. This is below W3 standards of a 3.0 ratio.',
      );
    }

    colorSets[color + 'Hover'] = calculateTransparentColor(semanticColors[color], invertColor(canvasColor), 0.8);
    colorSets[color + 'Pressed'] = calculateTransparentColor(semanticColors[color], invertColor(canvasColor), 0.7);
    colorSets[color + 'Disabled'] = calculateTransparentColor(semanticColors[color], canvasColor, 0.5);
    colorSets[color + 'ForegroundHover'] = calculateTransparentColor(semanticColors[color], canvasColor, 0.04);
    colorSets[color + 'ForegroundPressed'] = calculateTransparentColor(semanticColors[color], canvasColor, 0.08);
  }

  return colorSets as ColorSet<T>;
};

// export type Theme = {
//   /**
//    * The color of text within the site. This is the inverse of the canvasColor.
//    */
//   textColor: string;

//   /**
//    * The background canvas color of your site.
//    */
//   canvasColor: string;
// } & ColorSet<keyof SemanticColors>;

export function themeGenerator<T extends string | number>(props: ThemeGeneratorProps<T>) {
  const { canvasColor, semanticColors } = props;


  const test = {
    inherit: '#4d4d4d',
  };

  const colorSets = createSemanticColor<keyof typeof semanticColors>(semanticColors, canvasColor);

  return {
    textColor: invertColor(canvasColor),
    canvasColor,
    ...colorSets,
  };
};

const webLightTheme = themeGenerator({
  canvasColor: '#ffffff',
  semanticColors: {
    inherit: '#4d4d4d',
    brand: '3'
  },
});

const test = webLightTheme.;
