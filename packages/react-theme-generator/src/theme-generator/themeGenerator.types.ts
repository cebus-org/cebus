type SemanticColorKey<T extends string | number> = T;

/**
 * The collection of SemanticColors (brand, secondary, success, ...).
 */
export type SemanticColors<T extends string | number> = {
  [key in SemanticColorKey<T>]: string;
};

type ColorSetKey<T extends string | number> =
  | T
  | `${T}Hover`
  | `${T}Pressed`
  | `${T}Disabled`
  | `${T}ForegroundHover`
  | `${T}ForegroundPressed`
  | `${T}Background`
  | `${T}BackgroundDisabled`;

/**
 * The subset collection of semantic colors and their different states.
 * Example: brand, brandPressed, brandHover, ...
 */
export type ColorSet<T extends string | number> = {
  [key in ColorSetKey<T>]: string;
};

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
