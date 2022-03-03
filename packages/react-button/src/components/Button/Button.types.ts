import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import type { ARIAButtonSlotProps } from '@fluentui/react-aria';

export type ButtonSlots = {
  /**
   * The root of the Button.
   */
  root: Slot<ARIAButtonSlotProps>;
};

type ButtonCommons = {
  /**
   * The appearance variant to use for the Button.
   *
   * @defaultValue outline
   */
  appearance?: 'outline' | 'primary' | 'subtle' | 'transparent';

  /**
   * The color type for the Button.
   *
   * @defaultValue inherit
   */
  color?: 'inherit' | 'brand' | 'secondary' | 'success' | 'danger' | 'social' | 'warning' | 'info';

  /**
   * Whether the Button should be disabled.
   *
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * The shape of the Button.
   *
   * @defaultValue rounded
   */
  shape?: 'rounded' | 'circular' | 'circle' | 'square';

  /**
   * The size of the Button.
   *
   * @defaultValue medium
   */
  size?: 'small' | 'medium' | 'large';
};

export type ButtonProps = ComponentProps<ButtonSlots> & ButtonCommons;

export type ButtonState = ComponentState<ButtonSlots> & ButtonCommons;
