import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { SelectSlots, SelectState } from './Select.types';

export const renderSelect = (state: SelectState) => {
  const { slots, slotProps } = getSlots<SelectSlots>(state);

  return (
    <slots.menu {...(slotProps as any).menu}>
      <slots.menuTrigger {...(slotProps as any).menuTrigger}>
        <slots.root {...slotProps.root}>
          <slots.selectValue {...slotProps.selectValue} />
        </slots.root>
      </slots.menuTrigger>
      <slots.menuPopover {...slotProps.menuPopover}>
        <slots.menuList {...slotProps.menuList}>{state.root.children}</slots.menuList>
      </slots.menuPopover>
    </slots.menu>
  );
};
