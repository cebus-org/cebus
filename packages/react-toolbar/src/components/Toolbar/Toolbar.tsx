import * as React from 'react';
import { useToolbar } from './useToolbar';
import { renderToolbar } from './renderToolbar';
import { useToolbarStyles } from './useToolbarStyles';
import type { ToolbarProps } from './Toolbar.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Toolbar component displays important information and actions for an application.
 */
export const Toolbar: ForwardRefComponent<ToolbarProps> = React.forwardRef((props, ref) => {
  const state = useToolbar(props, ref);

  useToolbarStyles(state);

  return renderToolbar(state);
});
Toolbar.displayName = 'Toolbar';
