type HexDigit =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F';

/**
 * Type of a hex color.
 */
export type HexColor<T extends string> = T extends `#${HexDigit}${HexDigit}${HexDigit}${infer Rest1}`
  ? Rest1 extends ``
    ? T
    : Rest1 extends `${HexDigit}${HexDigit}${HexDigit}`
    ? T
    : never
  : never;

type SemanticColorKey<T extends string | number> = T;

/**
 * The collection of SemanticColors (brand, secondary, success, ...).
 */
export type SemanticColors<T extends string | number> = {
  [key in SemanticColorKey<T>]: string;
};

type ColorSetKey<T extends string | number> =
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
export type ColorSet<T extends string | number> = {
  [key in ColorSetKey<T>]: string;
};

// type Colors = 'brand';

// type Theme = ColorSet<Colors>;

// const theme: Theme = {
//   brand: 'asdf',
//   brandHovered: 'asdf',

//   brandDisabled: 'asdf',
//   brandForegroundHover: 'asdf',
//   brandForegroundPressed: 'asdf',
// };

// console.log(theme);

export type ThemeGeneratorProps<T extends string | number> = {
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
  semanticColors: SemanticColors<T>;
};
