import * as React from 'react';
import { useMenuItem_unstable, renderMenuItem_unstable } from '@fluentui/react-menu';
import type { MenuItemProps } from '@fluentui/react-menu';
import { useMenuItemStyles } from './useMenuItemStyles';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 *  Used to create an item in the Menu.
 */
export const MenuItem: ForwardRefComponent<MenuItemProps> = React.forwardRef((props, ref) => {
  const state = useMenuItem_unstable(props, ref);

  useMenuItemStyles(state);

  return renderMenuItem_unstable(state);
});

MenuItem.displayName = 'MenuItem';
