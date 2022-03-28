import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import type { ToolbarContextValue } from '../../contexts/toolbarContext';

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
  position?: 'sticky' | 'relative' | 'fixed';

  /**
   * The appearance of the Toolbar.
   *
   * * subtle - background matches the canvas color
   * * primary - background matches the brand color
   */
  appearance?: 'subtle' | 'primary';
};

export type ToolbarContextValues = {
  toolbar: ToolbarContextValue;
};

export type ToolbarProps = ComponentProps<ToolbarSlots> & ToolbarCommons;

export type ToolbarState = ComponentState<ToolbarSlots> & ToolbarCommons;
