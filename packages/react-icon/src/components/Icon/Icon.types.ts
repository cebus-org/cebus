import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type IconSlots = {
  /**
   * The root of the Icon.
   */
  root: Slot<'span'>;
};

export type IconCommons = {
  /**
   * The color type for the Icon.
   */
  color?: 'inherit' | 'brand' | 'secondary' | 'success' | 'danger' | 'social' | 'warning' | 'info';

  /**
   * The size of the Icon.
   *
   * * Smaller - `20px`
   * * Small - `24px`
   * * Medium - `28px`
   * * Large - `32px`
   *
   * @defaultValue medium
   */
  size?: 'smaller' | 'small' | 'medium' | 'large';
};

export type IconProps = ComponentProps<IconSlots> & IconCommons;

export type IconState = ComponentState<IconSlots> & IconCommons;
