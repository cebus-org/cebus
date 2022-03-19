import * as React from 'react';
import { Portal } from '@fluentui/react-portal';
import { getSlots } from '@fluentui/react-utilities';
import type { DialogSlots, DialogState } from './Dialog.types';

export const renderDialog = (state: DialogState) => {
  const { slots, slotProps } = getSlots<DialogSlots>(state);

  return (
    <Portal mountNode={state.mountNode}>
      {state.open && (
        <slots.root {...slotProps.root}>
          {slots.dialogBox && <slots.dialogBox {...slotProps.dialogBox}>{state.root.children}</slots.dialogBox>}
        </slots.root>
      )}
    </Portal>
  );
};
