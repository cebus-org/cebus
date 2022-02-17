import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import type { ARIAButtonSlotProps } from '@fluentui/react-aria';

export type ButtonSlots = {
  /**
   * The root of the Button.
   */
  root: Slot<ARIAButtonSlotProps>;
};

export type ButtonCommons = {
  /**
   * The appearance variant to use for the button.
   *
   * @default outline
   */
  appearance?: 'outline' | 'primary' | 'subtle' | 'transparent';

  /**
   * The color type for the button.
   *
   * @default inherit
   */
  color?: 'inherit' | 'brand' | 'secondary' | 'success' | 'error' | 'social' | 'warning' | 'info';

  /**
   * Whether the button should be disabled.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * The shape of the button.
   *
   * @default rounded
   */
  shape?: 'rounded' | 'circular' | 'circle' | 'square';

  /**
   * The size of the button.
   *
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
};

export type ButtonProps = ComponentProps<ButtonSlots> & ButtonCommons;

export type ButtonState = ComponentState<ButtonSlots> & ButtonCommons;
