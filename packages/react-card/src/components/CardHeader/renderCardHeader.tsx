import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { CardHeaderState, CardHeaderSlots } from './CardHeader.types';

export const renderCardHeader = (state: CardHeaderState) => {
  const { slots, slotProps } = getSlots<CardHeaderSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      {slots.avatar && <slots.avatar {...slotProps.avatar} />}
      {slots.textContainer && (slots.header || slots.description) && (
        <slots.textContainer {...slotProps.textContainer}>
          {slots.header && <slots.header {...slotProps.header} />}
          {slots.description && <slots.description {...slotProps.description} />}
        </slots.textContainer>
      )}
      {slots.action && <slots.action {...slotProps.action} />}
    </slots.root>
  );
};
