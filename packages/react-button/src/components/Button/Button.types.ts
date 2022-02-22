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
   * The appearance variant to use for the button.
   *
   * @defaultValue outline
   */
  appearance?: 'outline' | 'primary' | 'subtle' | 'transparent';

  /**
   * The color type for the button.
   *
   * @defaultValue inherit
   */
  color?: 'inherit' | 'brand' | 'secondary' | 'success' | 'error' | 'social' | 'warning' | 'info';

  /**
   * Whether the button should be disabled.
   *
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * The shape of the button.
   *
   * @defaultValue rounded
   */
  shape?: 'rounded' | 'circular' | 'circle' | 'square';

  /**
   * The size of the button.
   *
   * @defaultValue medium
   */
  size?: 'small' | 'medium' | 'large';
};

export type ButtonProps = ComponentProps<ButtonSlots> & ButtonCommons;

export type ButtonState = ComponentState<ButtonSlots> & ButtonCommons;
