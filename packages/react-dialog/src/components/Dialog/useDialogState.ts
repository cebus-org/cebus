import * as React from 'react';
import { useMergedRefs } from '@fluentui/react-utilities';
import { useFocusFinders } from '@fluentui/react-tabster';
import type { DialogState } from './Dialog.types';

export const useDialogState = (state: DialogState) => {
  const { findFirstFocusable } = useFocusFinders();
  const { open, onOpenChange, label } = state;
  const { onPointerDown: onPointerDownOriginal, onKeyDown: onKeyDownOriginal } = state.root;

  const dialogBoxRef = React.useRef(null);
  const contentRef = useMergedRefs(dialogBoxRef, state?.dialogBox?.ref);

  state.root.onPointerDown = (ev: React.PointerEvent<HTMLDivElement>) => {
    onOpenChange?.(ev, { open: false });
    onPointerDownOriginal?.(ev);
  };

  if (state.dialogBox) {
    state.dialogBox.onPointerDown = (ev: React.PointerEvent<HTMLDivElement>) => {
      ev.stopPropagation();
    };
  }

  state.root.onKeyDown = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    if (ev.key === 'Escape' && contentRef.current?.contains(ev.target as HTMLDivElement)) {
      onOpenChange?.(ev, { open: false });
    }

    onKeyDownOriginal?.(ev);
  };

  React.useEffect(() => {
    if (open && contentRef.current) {
      // Save the previous active element
      const previousActiveElement: any = document.activeElement;
      const firstFocusable = findFirstFocusable(contentRef.current);

      // Focus the first available item, otherwise the dialog card.
      if (firstFocusable) {
        firstFocusable?.focus();
      } else {
        contentRef.current.tabIndex = 0;
        contentRef.current.focus();
      }

      // If a previous element was active before the Dialog was opened, focus it.
      return () => previousActiveElement && previousActiveElement.focus();
    }
  }, [contentRef, findFirstFocusable, open]);

  if (state.dialogBox) {
    state.dialogBox.ref = contentRef;
  }

  // Aria Label
  state.root['aria-label'] = label;

  return state;
};
