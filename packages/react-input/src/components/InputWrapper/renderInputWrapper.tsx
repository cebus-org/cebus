import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { InputWrapperSlots, InputWrapperState } from './InputWrapper.types';

export const renderInputWrapper = (state: InputWrapperState) => {
  const { slots, slotProps } = getSlots<InputWrapperSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.border {...slotProps.border}>
        {slots.contentBefore && <slots.contentBefore {...slotProps.contentBefore} />}
        {state.root.children}
        {slots.contentAfter && <slots.contentAfter {...slotProps.contentAfter} />}
      </slots.border>
      {slots.helperText && <slots.helperText {...slotProps.helperText} />}
    </slots.root>
  );
};
