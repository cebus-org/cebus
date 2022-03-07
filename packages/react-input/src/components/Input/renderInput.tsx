import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { InputSlots, InputState } from './Input.types';

export const renderInput = (state: InputState) => {
  const { slots, slotProps } = getSlots<InputSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.input {...slotProps.input} />
    </slots.root>
  );
};
