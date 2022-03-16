import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type ToolbarSlots = {
  /**
   * The root of the Toolbar.
   */
  root: Slot<'header'>;
};

type ToolbarCommons = {
  /**
   * Whether the Toolbar should have padding on the first and last elements.
   */
  contentPadding?: boolean;

  /**
   * Whether the Toolbar should be sticky (follow the current page position) or relative (statically positioned).
   */
  position?: 'sticky' | 'relative';
};

export type ToolbarProps = ComponentProps<ToolbarSlots> & ToolbarCommons;

export type ToolbarState = ComponentState<ToolbarSlots> & ToolbarCommons;
