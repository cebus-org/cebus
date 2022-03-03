import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { CardMediaState, CardMediaSlots } from './CardMedia.types';

export const renderCardMedia = (state: CardMediaState) => {
  const { slots, slotProps } = getSlots<CardMediaSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      {slotProps.root.children}
      {slots.logo && <slots.logo {...slotProps.logo} />}
    </slots.root>
  );
};
