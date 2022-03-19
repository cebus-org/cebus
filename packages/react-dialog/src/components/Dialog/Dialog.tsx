import * as React from 'react';
import { useDialog } from './useDialog';
import { renderDialog } from './renderDialog';
import type { DialogProps } from './Dialog.types';

/**
 * The Dialog component helps manage state for the DialogSurface and DialogTrigger components.
 */
export const Dialog: React.FC<DialogProps> = props => {
  const state = useDialog(props);

  return renderDialog(state);
};
Dialog.displayName = 'Dialog';
