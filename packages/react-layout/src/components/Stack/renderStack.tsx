import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { StackState, StackSlots } from './Stack.types';

export const renderStack = (state: StackState) => {
  const { slots, slotProps } = getSlots<StackSlots>(state);

  return <slots.root {...slotProps.root} />;
};
