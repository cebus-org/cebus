import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import type { ARIAButtonSlotProps } from '@fluentui/react-aria';

export type ToolbarButtonSlots = {
  /**
   * The root of the ToolbarButton.
   */
  root: Slot<ARIAButtonSlotProps>;
};

type ToolbarButtonCommons = {
  /**
   * Whether the button is enabled or disabled.
   */
  disabled?: boolean;
};

export type ToolbarButtonProps = ComponentProps<ToolbarButtonSlots> & ToolbarButtonCommons;

export type ToolbarButtonState = ComponentState<ToolbarButtonSlots> & ToolbarButtonCommons;
