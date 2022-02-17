import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { ButtonState, ButtonSlots } from './Button.types';

export const renderButton = (state: ButtonState) => {
  const { slots, slotProps } = getSlots<ButtonSlots>(state);

  return <slots.root {...slotProps.root}>{state.root.children}</slots.root>;
};
