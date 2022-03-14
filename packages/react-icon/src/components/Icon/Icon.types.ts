import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type IconSlots = {
  /**
   * The root of the Icon.
   */
  root: Slot<'svg'>;
};

export type IconCommons = {
  /**
   * The color type for the Icon.
   */
  color?: 'inherit' | 'brand' | 'secondary' | 'success' | 'danger' | 'social' | 'warning' | 'info';

  /**
   * Whether the Icon should render using a disabled color type.
   */
  disabled?: boolean;

  /**
   * The size of the Icon.
   *
   * * Small - `16px`
   * * Medium - `24px`
   * * Large - `32px`
   *
   * @defaultValue medium
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * The viewBox size of the SVG.
   */
  viewBox?: string;
};

export type IconProps = ComponentProps<IconSlots> & IconCommons;

export type IconState = ComponentState<IconSlots> & IconCommons;
