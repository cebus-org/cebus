import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { CardRowState, CardRowSlots } from './CardRow.types';

export const renderCardRow = (state: CardRowState) => {
  const { slots, slotProps } = getSlots<CardRowSlots>(state);

  return <slots.root {...slotProps.root} />;
};
