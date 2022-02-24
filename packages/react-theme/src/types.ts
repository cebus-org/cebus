export type Theme = ColorTokens & Fonts;

/**
 * Color theme tokens.
 */
export type ColorTokens = {
  canvasColor: String;
  textColor: String;
  inherit: String;
  inheritHover: String;
  inheritPressed: String;
  inheritDisabled: String;
  inheritForegroundHover: String;
  inheritForegroundPressed: String;
  inheritBackground: String;
  inheritBackgroundDisabled: String;
  brand: String;
  brandHover: String;
  brandPressed: String;
  brandDisabled: String;
  brandForegroundHover: String;
  brandForegroundPressed: String;
  brandBackground: String;
  secondary: String;
  secondaryHover: String;
  secondaryPressed: String;
  secondaryDisabled: String;
  secondaryForegroundHover: String;
  secondaryForegroundPressed: String;
  success: String;
  successHover: String;
  successPressed: String;
  successDisabled: String;
  successForegroundHover: String;
  successForegroundPressed: String;
  error: String;
  errorHover: String;
  errorPressed: String;
  errorDisabled: String;
  errorForegroundHover: String;
  errorForegroundPressed: String;
  social: String;
  socialHover: String;
  socialPressed: String;
  socialDisabled: String;
  socialForegroundHover: String;
  socialForegroundPressed: String;
  warning: String;
  warningHover: String;
  warningPressed: String;
  warningDisabled: String;
  warningForegroundHover: String;
  warningForegroundPressed: String;
  info: String;
  infoHover: String;
  infoPressed: String;
  infoDisabled: String;
  infoForegroundHover: String;
  infoForegroundPressed: String;
};

export type Fonts = FontFamilyTokens & FontOpacityTokens & FontSizeTokens & FontLineHeightTokens & FontWeightTokens;

/**
 * Font family tokens.
 */
export type FontFamilyTokens = {
  baseFont: string;
  monospaceFont: string;
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
