import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { MenuItemRadio } from '@pongo-ui/react-menu';
import type { SelectSlots, SelectState } from './Select.types';

export const renderSelect = (state: SelectState) => {
  const { slots, slotProps } = getSlots<SelectSlots>(state);

  return (
    <slots.menu {...slotProps.menu}>
      <slots.menuTrigger {...slotProps.menuTrigger}>
        <slots.root {...slotProps.root}>
          <slots.select {...slotProps.select} />
        </slots.root>
      </slots.menuTrigger>
      <slots.menuPopover {...slotProps.menuPopover}>
        <slots.menuList {...slotProps.menuList}>{state.root.children}</slots.menuList>
      </slots.menuPopover>
    </slots.menu>
  );
};
