import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { Menu, MenuTrigger, MenuList, MenuPopover, MenuItem, MenuItemRadio } from '@pongo-ui/react-menu';
import type { SelectSlots, SelectState } from './Select.types';

export const renderSelect = (state: SelectState) => {
  const { slots, slotProps } = getSlots<SelectSlots>(state);

  return (
    <slots.menu {...slotProps.menu}>
      <slots.menuTrigger {...slotProps.menuTrigger}>
        <slots.root {...slotProps.root}>
          <slots.input {...slotProps.input} />
        </slots.root>
      </slots.menuTrigger>
      <slots.menuPopover {...slotProps.menuPopover}>
        <slots.menuList {...slotProps.menuList}>
          <MenuItemRadio name="font" value="segoe">
            Segoe
          </MenuItemRadio>
          <MenuItemRadio name="font" value="calibri">
            Calibri
          </MenuItemRadio>
          <MenuItemRadio name="font" value="arial">
            Arial
          </MenuItemRadio>
        </slots.menuList>
      </slots.menuPopover>
    </slots.menu>
  );
};
