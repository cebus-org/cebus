import * as React from 'react';
import { useEventCallback, useMergedRefs } from '@fluentui/react-utilities';
import type { DialogState, OpenDialogEvents, OnOpenChangeData } from './Dialog.types';

export const useDialogState = (state: DialogState) => {
  const { open, onOpenChange } = state;
  const {
    onMouseEnter: onMouseEnterOriginal,
    onMouseLeave: onMouseLeaveOriginal,
    onKeyDown: onKeyDownOriginal,
  } = state.root;

  const dialogBoxRef = React.useRef(null);
  const contentRef = useMergedRefs(dialogBoxRef, state?.dialogBox?.ref);

  const onDialogOpenChange = useEventCallback((ev: OpenDialogEvents, data: OnOpenChangeData) => {
    onOpenChange?.(ev, { open: data.open });
  });

  state.root.onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('test');
    onMouseEnterOriginal?.(e);
  };

  state.root.onPointerDown = (ev: React.MouseEvent<HTMLDivElement>) => {
    onOpenChange?.(ev, { open: false });
  };

  state.root.onMouseLeave = (ev: React.MouseEvent<HTMLDivElement>) => {
    onOpenChange?.(ev, { open: false });
  };

  state.root.onKeyDown = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    console.log('key down');

    if (ev.key === 'Escape' && contentRef.current?.contains(ev.target as HTMLDivElement)) {
      onOpenChange?.(ev, false);
    }

    onKeyDownOriginal?.(ev);
  };

  // state.onOpenChange = onDialogOpenChange;

  return state;
};
