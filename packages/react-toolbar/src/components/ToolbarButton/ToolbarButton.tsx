import * as React from 'react';
import { useToolbarButton } from './useToolbarButton';
import { renderToolbarButton } from './renderToolbarButton';
import { useToolbarButtonStyles } from './useToolbarButtonStyles';
import type { ToolbarButtonProps } from './ToolbarButton.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The ToolbarButton component provides a standardized action state for items on a toolbar.
 */
export const ToolbarButton: ForwardRefComponent<ToolbarButtonProps> = React.forwardRef((props, ref) => {
  const state = useToolbarButton(props, ref);

  useToolbarButtonStyles(state);

  return renderToolbarButton(state);
});
ToolbarButton.displayName = 'ToolbarButton';
