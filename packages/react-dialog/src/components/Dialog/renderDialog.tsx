import * as React from 'react';
import { DialogContext } from '../../dialogContext';
import type { DialogState } from './Dialog.types';

export const renderDialog = (state: DialogState) => {
  const { setOpen, toggleOpen, triggerRef, contentRef, trapFocus } = state;

  return (
    <DialogContext.Provider
      value={{
        setOpen,
        toggleOpen,
        triggerRef,
        contentRef,
        trapFocus,
      }}
    >
      {state.dialogTrigger}
      {state.open && state.dialogSurface}
    </DialogContext.Provider>
  );
};
