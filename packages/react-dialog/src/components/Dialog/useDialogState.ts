import * as React from 'react';
import { useControllableState, useEventCallback, useMergedRefs } from '@fluentui/react-utilities';
import type { DialogState, OpenDialogEvents } from './Dialog.types';

export const useDialogState = (state: DialogState) => {
  const { open, defaultOpen, onOpenChange } = state;
  const {
    onMouseEnter: onMouseEnterOriginal,
    onMouseLeave: onMouseLeaveOriginal,
    onKeyDown: onKeyDownOriginal,
  } = state.root;

  const dialogBoxRef = React.useRef(null);
  const contentRef = useMergedRefs(dialogBoxRef, state?.dialogBox?.ref);

  const [currentValue, setCurrentValue] = useControllableState({
    defaultState: open,
    state: defaultOpen,
    initialState: false,
  });

  const onDialogOpenChange = useEventCallback((ev: OpenDialogEvents, value: boolean) => {
    onOpenChange?.(ev, { open: value });
    setCurrentValue(!currentValue);
  });

  state.root.onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('test');
    onMouseEnterOriginal?.(e);
  };

  state.root.onPointerDown = (ev: React.MouseEvent<HTMLDivElement>) => {
    console.log('test');
  };

  state.root.onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseLeaveOriginal?.(e);
  };

  state.root.onKeyDown = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    console.log('key down');

    if (ev.key === 'Escape' && contentRef.current?.contains(ev.target as HTMLDivElement)) {
      onDialogOpenChange(ev, false);
    }

    onKeyDownOriginal?.(ev);
  };

  return state;
};
