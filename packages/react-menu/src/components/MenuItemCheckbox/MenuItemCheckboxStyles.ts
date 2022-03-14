import { useMenuItemStyles } from '../MenuItem/useMenuItemStyles';
import { useCheckmarkStyles_unstable } from '@fluentui/react-menu';
import type { MenuItemRadioState } from '@fluentui/react-menu';

export const useMenuItemCheckboxStyles = (state: MenuItemRadioState): MenuItemRadioState => {
  useMenuItemStyles(state);

  useCheckmarkStyles_unstable(state);

  return state;
};
