import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { CarouselState, CarouselSlots } from './Carousel.types';

export const renderCarousel = (state: CarouselState) => {
  const { slots, slotProps } = getSlots<CarouselSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.tabpanel {...slotProps.tabpanel}>{state.root.children}</slots.tabpanel>
      {slots.backArrow && state.appearance === 'minimal' && <slots.backArrow {...slotProps.backArrow} />}
      {slots.forwardArrow && state.appearance === 'minimal' && <slots.forwardArrow {...slotProps.forwardArrow} />}
      {slots.radioIndicator && state.appearance === 'minimal' && <slots.radioIndicator {...slotProps.radioIndicator} />}
    </slots.root>
  );
};
