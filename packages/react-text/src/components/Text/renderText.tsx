import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { TextState, TextSlots } from './Text.types';

export const renderText = (state: TextState) => {
  const { slots, slotProps } = getSlots<TextSlots>(state);

  return <slots.root {...slotProps.root} />;
};
