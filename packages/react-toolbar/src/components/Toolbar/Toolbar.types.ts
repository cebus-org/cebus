import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type ToolbarSlots = {
  /**
   * The root of the Toolbar.
   */
  root: Slot<'header'>;
};

type ToolbarCommons = {};

export type ToolbarProps = ComponentProps<ToolbarSlots> & ToolbarCommons;

export type ToolbarState = ComponentState<ToolbarSlots> & ToolbarCommons;
