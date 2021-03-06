import type { ColorSet } from '@cebus/react-theme-generator';

export type Theme = ColorTokens & Fonts & MotionTokens & BorderRadiusTokens & LayoutTokens;

/**
 * Color theme tokens.
 */
export type ColorTokens = { textColor: string; canvasColor: string } & ColorSet<
  'inherit' | 'brand' | 'secondary' | 'success' | 'danger' | 'social' | 'warning' | 'info'
>;

export type Fonts = FontFamilyTokens & FontOpacityTokens & FontSizeTokens & FontLineHeightTokens & FontWeightTokens;

/**
 * Font family tokens.
 */
export type FontFamilyTokens = {
  fontFamilyBase: string;
  monospaceFont: string;
};

/**
 * Layout tokens.
 */
export type LayoutTokens = {
  relaxedLayout: string;
  focusedLayout: string;
};

/**
 * Font opacity tokens
 */
export type FontOpacityTokens = {
  display: string;
  subHeadline: string;
  body: string;
  caption: string;
  title: string;
  header1: string;
  header2: string;
  header3: string;
};

/**
 * Animation token values
 */
export type MotionTokens = {
  transitionDuration: string;
  transitionTimingFunction: string;
};

/**
 * Font size tokens.
 */
export type FontSizeTokens = {
  fontSize100: string;
  fontSize200: string;
  fontSize300: string;
  fontSize400: string;
  fontSize500: string;
  fontSize600: string;
  fontSize700: string;
  fontSize800: string;
  fontSize900: string;
  fontSize1000: string;
};

/**
 * Font line height tokens.
 */
export type FontLineHeightTokens = {
  lineHeight100: string;
  lineHeight200: string;
  lineHeight300: string;
  lineHeight400: string;
  lineHeight500: string;
  lineHeight600: string;
  lineHeight700: string;
  lineHeight800: string;
  lineHeight900: string;
  lineHeight1000: string;
};

/**
 * Font weight tokens.
 */
export type FontWeightTokens = {
  thin: number;
  light: number;
  regular: number;
  medium: number;
  bold: number;
  black: number;
};

/**
 * Border radius tokens.
 */
export type BorderRadiusTokens = {
  square: string;
  rounded: string;
  circular: string;
  circle: string;
};
