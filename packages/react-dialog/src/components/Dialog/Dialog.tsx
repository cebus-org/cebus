import * as React from 'react';
import { useDialog } from './useDialog';
import { renderDialog } from './renderDialog';
import { useDialogStyles } from './useDialogStyles';
import type { DialogProps } from './Dialog.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Dialog component presents a surface that users can either complete tasks or obtain information from.
 */
export const Dialog: ForwardRefComponent<DialogProps> = React.forwardRef((props, ref) => {
  const state = useDialog(props, ref);

  useDialogStyles(state);

  return renderDialog(state);
});
Dialog.displayName = 'Dialog';
