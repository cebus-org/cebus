import * as React from 'react';
import { useMenuList_unstable, useMenuListContextValues_unstable, renderMenuList_unstable } from '@fluentui/react-menu';
import type { MenuListProps } from '@fluentui/react-menu';
import { useMenuListStyles } from './useMenuListStyles';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * Wrapper for `MenuItems`. This is what handles the items context.
 */
export const MenuList: ForwardRefComponent<MenuListProps> = React.forwardRef((props, ref) => {
  const state = useMenuList_unstable(props, ref);
  const contextValues = useMenuListContextValues_unstable(state);
  useMenuListStyles(state);

  return renderMenuList_unstable(state, contextValues);
});
MenuList.displayName = 'MenuList';
