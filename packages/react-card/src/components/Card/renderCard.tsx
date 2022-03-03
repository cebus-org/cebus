import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { CardState, CardSlots } from './Card.types';

export const renderCard = (state: CardState) => {
  const { slots, slotProps } = getSlots<CardSlots>(state);

  return <slots.root {...slotProps.root}>{state.root.children}</slots.root>;
};
