import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { FormControlState, FormControlSlots } from './FormControl.types';

export const renderFormControl = (state: FormControlState) => {
  const { slots, slotProps } = getSlots<FormControlSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      {state.label && (state.labelPosition === 'before' || state.labelPosition === 'above') && slots.labelComponent && (
        <slots.labelComponent {...slotProps.labelComponent} />
      )}
      <slots.componentWrapper {...slotProps.componentWrapper}>
        {state.root.children}
        {slots.helperTextComponent && state.helperText && (
          <slots.helperTextComponent {...slotProps.helperTextComponent} />
        )}
      </slots.componentWrapper>
      {state.label && state.labelPosition === 'after' && slots.labelComponent && (
        <slots.labelComponent {...slotProps.labelComponent} />
      )}
    </slots.root>
  );
};
