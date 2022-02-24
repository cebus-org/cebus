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
  semanticColors: any;
};
