import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type TextSlots = {
  /**
   * The root element.
   */
  root: Slot<'span', 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'pre'>;
};

export type TextCommons = {
  /**
   * The size of the text (provides line height and font size).
   *
   * @defaultValue 300
   */
  size?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;

  /**
   * The font family for the text.
   *
   * @defaultValue base
   */
  font?: 'base' | 'monospace';

  /**
   * The font weight for the text.
   *
   * @defaultValue regular
   */
  weight?: 'thin' | 'light' | 'regular' | 'medium' | 'bold' | 'black';

  /**
   * The color of the text.
   *
   * @defaultValue inherent
   */
  color?: 'base' | 'inherit' | 'white' | 'brand' | 'secondary' | 'success' | 'danger' | 'social' | 'warning' | 'info';

  /**
   * Whether to render italic text.
   *
   * @defaultValue false
   */
  italic?: boolean;

  /**
   * Whether to underline the text.
   *
   * @defaultValue false
   */
  underline?: boolean;

  /**
   * Whether the text should be striked through.
   *
   * @defaultValue false
   */
  strikethrough?: boolean;
};

export type TextProps = ComponentProps<TextSlots> & TextCommons;

export type TextState = ComponentState<TextSlots> & TextCommons;
