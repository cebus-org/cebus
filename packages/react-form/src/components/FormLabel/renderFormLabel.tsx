import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { FormLabelState, FormLabelSlots } from './FormLabel.types';

export const renderFormLabel = (state: FormLabelState) => {
  const { slots, slotProps } = getSlots<FormLabelSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      {slots.labelComponent && <slots.labelComponent {...slotProps.labelComponent} />}
      {state.root.children}
    </slots.root>
  );
};
