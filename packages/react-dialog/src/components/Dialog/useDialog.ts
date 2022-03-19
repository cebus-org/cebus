import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import { useModalAttributes } from '@fluentui/react-tabster';
import type { DialogProps, DialogState } from './Dialog.types';
import { useDialogState } from './useDialogState';

export const useDialog = (props: DialogProps, ref: React.Ref<HTMLDivElement>): DialogState => {
  const { open = true, trapFocus, dialogBox, background } = props;

  const { modalAttributes } = useModalAttributes({ trapFocus });

  const state: DialogState = {
    open,
    components: {
      root: 'div',
      background: 'div',
      dialogBox: 'div',
    },
    root: getNativeElementProps('div', {
      ref,
      role: trapFocus ? 'dialog' : 'complementary',
      'aria-modal': trapFocus ? true : undefined,
      ...modalAttributes,
      ...props,
    }),
    dialogBox: resolveShorthand(dialogBox, {
      required: true,
    }),
  };

  // const {
  //   onMouseEnter: onMouseEnterOriginal,
  //   onMouseLeave: onMouseLeaveOriginal,
  //   onKeyDown: onKeyDownOriginal,
  // } = state.root;
  // state.root.onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
  //   onMouseEnterOriginal?.(e);
  // };

  // state.root.onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
  //   onMouseLeaveOriginal?.(e);
  // };

  // state.root.onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
  //   // only close if the event happened inside the current popover
  //   // If using a stack of inline popovers, the user should call `stopPropagation` to avoid dismissing the entire stack
  //   if (e.key === 'Escape' && contentRef.current?.contains(e.target as HTMLDivElement)) {
  //     setOpen(e, false);
  //   }

  //   onKeyDownOriginal?.(e);
  // };

  useDialogState(state);

  return state;
};
