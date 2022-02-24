/**
 * The collection of SemanticColors (brand, secondary, success, ...).
 */
export type SemanticColors = {
  [key: string]: string;
};

type ColorSetKey<T extends string> =
  | T
  | `${T}Hovered`
  | `${T}Pressed`
  | `${T}Disabled`
  | `${T}ForegroundHover`
  | `${T}ForegroundPressed`;

/**
 * The subset collection of semantic colors and their different states.
 * Example: brand, brandPressed, brandHover, ...
 */
export type ColorSet<T extends string> = {
  [key in ColorSetKey<T>]: string;
};

// type Colors = 'brand';

// type Theme = ColorSet<Colors>;

// const theme: Theme = {
//   brand: 'asdf',
//   brandHovered: 'asdf',
//   brandPressed: 'asdf',
//   brandDisabled: 'asdf',
//   brandForegroundHover: 'asdf',
//   brandForegroundPressed: 'asdf',
// };

// console.log(theme);

export type ThemeGeneratorProps = {
  /**
   * The color of your site's canvas.
   */
  canvasColor: string;

  /**
   * The set of semantic colors to generate various states for.
   *
   * - Example: {brand: '#2060CF'}
   * - Returns: {brand: '#2060CF', brandHover: '...', brandPressed: '...', ...}
   */
  semanticColors: SemanticColors;
};
