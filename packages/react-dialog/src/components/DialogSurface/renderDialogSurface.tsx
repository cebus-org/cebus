import * as React from 'react';
import { Portal } from '@fluentui/react-portal';
import { getSlots } from '@fluentui/react-utilities';
import type { DialogSurfaceSlots, DialogSurfaceState } from './DialogSurface.types';

export const renderDialogSurface = (state: DialogSurfaceState) => {
  const { slots, slotProps } = getSlots<DialogSurfaceSlots>(state);

  return (
    <Portal mountNode={state.mountNode}>
      <slots.root {...slotProps.root} />
    </Portal>
  );
};
