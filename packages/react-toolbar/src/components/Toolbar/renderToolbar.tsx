import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { ToolbarState, ToolbarSlots } from './Toolbar.types';

export const renderToolbar = (state: ToolbarState) => {
  const { slots, slotProps } = getSlots<ToolbarSlots>(state);

  return <slots.root {...slotProps.root}>{state.root.children}</slots.root>;
};
