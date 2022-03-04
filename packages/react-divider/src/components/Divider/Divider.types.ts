import type { ComponentState, ComponentProps } from '@fluentui/react-utilities';
import type { DividerSlots as FluentDividerSlots } from '@fluentui/react-divider';
type DividerCommons = {
  /**
   * The color of the Divider.
   *
   * @defaultValue inherit
   */
  color?: 'inherit' | 'brand';

  /**
   * Determines the alignment of the content within the divider.
   * @defaultvalue 'center'
   */
  alignContent: 'start' | 'center' | 'end';

  /**
   * A divider can have one of the preset appearances.
   * When not specified, the divider has its default appearance.
   */
  appearance?: 'brand' | 'strong' | 'subtle';

  /**
   * Adds padding to the beginning and end of the divider.
   * @defaultvalue false
   */
  inset: boolean;

  /**
   * A divider can be horizontal (default) or vertical.
   * @defaultvalue false
   */
  vertical: boolean;
};

export type DividerProps = ComponentProps<Partial<FluentDividerSlots>> & Partial<DividerCommons>;

export type DividerState = ComponentState<FluentDividerSlots> & DividerCommons;
