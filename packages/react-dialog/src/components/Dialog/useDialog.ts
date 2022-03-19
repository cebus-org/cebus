import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import { useModalAttributes } from '@fluentui/react-tabster';
import type { DialogProps, DialogState } from './Dialog.types';
import { useDialogState } from './useDialogState';

export const useDialog = (props: DialogProps, ref: React.Ref<HTMLDivElement>): DialogState => {
  const { open = true, dialogBox, onOpenChange, label } = props;

  const { modalAttributes } = useModalAttributes({ trapFocus: true });

  const state: DialogState = {
    open,
    label,
    onOpenChange,
    components: {
      root: 'div',
      dialogBox: 'div',
    },
    root: getNativeElementProps('div', {
      ref,
      role: 'dialog',
      'aria-modal': true,
      'aria-label': 'Hello world',
      ...modalAttributes,
      ...props,
    }),
    dialogBox: resolveShorthand(dialogBox, {
      required: true,
    }),
  };

  useDialogState(state);

  return state;
};
