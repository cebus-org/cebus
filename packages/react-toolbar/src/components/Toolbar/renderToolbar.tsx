import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { ToolbarState, ToolbarSlots, ToolbarContextValues } from './Toolbar.types';
import { ToolbarProvider } from '../../contexts/toolbarContext';

export const renderToolbar = (state: ToolbarState, contextValues: ToolbarContextValues) => {
  const { slots, slotProps } = getSlots<ToolbarSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <ToolbarProvider value={contextValues.toolbar}>{state.root.children}</ToolbarProvider>
    </slots.root>
  );
};
