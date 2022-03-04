import * as React from 'react';
import { useMenuItemRadio_unstable, renderMenuItemRadio_unstable } from '@fluentui/react-menu';
import type { MenuItemRadioProps } from '@fluentui/react-menu';
import { useMenuItemRadioStyles } from './useMenuItemRadioStyles';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * Radio button item for the Menu component.
 */
export const MenuItemRadio: ForwardRefComponent<MenuItemRadioProps> = React.forwardRef((props, ref) => {
  const state = useMenuItemRadio_unstable(props, ref);

  useMenuItemRadioStyles(state);

  return renderMenuItemRadio_unstable(state);
});

MenuItemRadio.displayName = 'MenuItemRadio';
