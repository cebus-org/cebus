import * as React from 'react';
import { useMenuPopover_unstable, renderMenuPopover_unstable } from '@fluentui/react-menu';
import type { MenuPopoverProps } from '@fluentui/react-menu';
import { useMenuPopoverStyles } from './useMenuPopoverStyles';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * Wrapper for `MenuList` used to add styling and interaction support.
 */
export const MenuPopover: ForwardRefComponent<MenuPopoverProps> = React.forwardRef((props, ref) => {
  const state = useMenuPopover_unstable(props, ref);

  useMenuPopoverStyles(state);
  return renderMenuPopover_unstable(state);
});

MenuPopover.displayName = 'MenuPopover';
