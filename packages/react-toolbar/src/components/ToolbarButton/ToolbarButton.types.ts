import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type ToolbarButtonSlots = {
  /**
   * The root of the ToolbarButton.
   */
  root: Slot<'button'>;
};

type ToolbarButtonCommons = {
  /**
   * Whether the button is enabled or disabled.
   */
  disabled?: boolean;
};

export type ToolbarButtonProps = ComponentProps<ToolbarButtonSlots> & ToolbarButtonCommons;

export type ToolbarButtonState = ComponentState<ToolbarButtonSlots> & ToolbarButtonCommons;
