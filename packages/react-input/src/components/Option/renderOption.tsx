import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { OptionState, OptionSlots } from './Option.types';

export const renderOption = (state: OptionState) => {
  const { slots, slotProps } = getSlots<OptionSlots>(state);

  return <slots.root {...slotProps.root} />;
};
