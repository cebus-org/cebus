import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { InputWrapperSlots, InputWrapperState } from './InputWrapper.types';

export const renderInputWrapper = (state: InputWrapperState) => {
  const { slots, slotProps } = getSlots<InputWrapperSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      {slots.contentBefore && <slots.contentBefore {...slotProps.contentBefore} />}
      {slots.label && <slots.label {...slotProps.label} />}
      {state.root.children}
      {slots.contentAfter && <slots.contentAfter {...slotProps.contentAfter} />}
    </slots.root>
  );
};
