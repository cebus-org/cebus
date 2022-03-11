import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { ChevronState, ChevronSlots } from './Chevron.types';

export const renderChevron = (state: ChevronState) => {
  const { slots, slotProps } = getSlots<ChevronSlots>(state);

  return <slots.root {...slotProps.root} />;
};
