import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { MultilineSlots, MultilineState } from './Multiline.types';

export const renderMultiline = (state: MultilineState) => {
  const { slots, slotProps } = getSlots<MultilineSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.textarea {...slotProps.textarea} />
    </slots.root>
  );
};
