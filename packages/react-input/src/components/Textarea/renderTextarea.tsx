import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { TextareaSlots, TextareaState } from './Textarea.types';

export const renderTextarea = (state: TextareaState) => {
  const { slots, slotProps } = getSlots<TextareaSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.textarea {...slotProps.textarea} />
    </slots.root>
  );
};
