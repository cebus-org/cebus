import * as React from 'react';
import { useDialogSurface } from './useDialogSurface';
import { renderDialogSurface } from './renderDialogSurface';
import { useDialogSurfaceStyles } from './useDialogSurfaceStyles';
import type { DialogSurfaceProps } from './DialogSurface.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * DialogSurface renders the surface of the Dialog.
 */
export const DialogSurface: ForwardRefComponent<DialogSurfaceProps> = React.forwardRef((props, ref) => {
  const state = useDialogSurface(props, ref);

  useDialogSurfaceStyles(state);
  return renderDialogSurface(state);
});
DialogSurface.displayName = 'DialogSurface';
