import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { CheckboxState, CheckboxSlots } from './Checkbox.types';

export const renderCheckbox = (state: CheckboxState) => {
  const { slots, slotProps } = getSlots<CheckboxSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.indicator {...slotProps.indicator} />
      <slots.input {...slotProps.input} />
    </slots.root>
  );
};
