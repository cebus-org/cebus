import * as React from 'react';
import { useMenu_unstable, useMenuContextValues_unstable, renderMenu_unstable } from '@fluentui/react-menu';
import type { MenuProps } from './Menu.types';

/**
 * Wrapper component that manages state for a popup MenuList and MenuTrigger
 */
export const Menu: React.FC<MenuProps> = props => {
  const state = useMenu_unstable({ inline: true, ...props });

  const contextValues = useMenuContextValues_unstable(state);

  return renderMenu_unstable(state, contextValues);
};

Menu.displayName = 'Menu';
