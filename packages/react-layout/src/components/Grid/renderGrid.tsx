import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { GridState, GridSlots } from './Grid.types';

export const renderGrid = (state: GridState) => {
  const { slots, slotProps } = getSlots<GridSlots>(state);

  return <slots.root {...slotProps.root} />;
};
