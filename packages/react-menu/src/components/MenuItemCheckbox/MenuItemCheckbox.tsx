import * as React from 'react';
import { useMenuItemCheckbox_unstable, renderMenuItemCheckbox_unstable } from '@fluentui/react-menu';
import type { MenuItemCheckboxProps } from '@fluentui/react-menu';
import { useMenuItemCheckboxStyles } from './MenuItemCheckboxStyles';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * Checkbox item for the Menu component.
 */
export const MenuItemCheckbox: ForwardRefComponent<MenuItemCheckboxProps> = React.forwardRef((props, ref) => {
  const state = useMenuItemCheckbox_unstable(props, ref);

  useMenuItemCheckboxStyles(state);

  return renderMenuItemCheckbox_unstable(state);
});

MenuItemCheckbox.displayName = 'MenuItemCheckbox';
