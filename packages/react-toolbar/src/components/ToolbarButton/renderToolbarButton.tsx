import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { ToolbarButtonState, ToolbarButtonSlots } from './ToolbarButton.types';

export const renderToolbarButton = (state: ToolbarButtonState) => {
  const { slots, slotProps } = getSlots<ToolbarButtonSlots>(state);

  return <slots.root {...slotProps.root} />;
};
