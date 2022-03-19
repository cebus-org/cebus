import * as React from 'react';
import { getNativeElementProps, useMergedRefs } from '@fluentui/react-utilities';
import { useModalAttributes } from '@fluentui/react-tabster';
import { useDialogContext } from '../../dialogContext';
import type { DialogSurfaceProps, DialogSurfaceState } from './DialogSurface.types';

/**
 * Create the state required to render PopoverSurface.
 *
 * The returned state can be modified with hooks such as usePopoverSurfaceStyles_unstable,
 * before being passed to renderPopoverSurface_unstable.
 *
 * @param props - props from this instance of PopoverSurface
 * @param ref - reference to root HTMLDivElement of PopoverSurface
 */
export const useDialogSurface = (props: DialogSurfaceProps, ref: React.Ref<HTMLDivElement>): DialogSurfaceState => {
  const contentRef = useDialogContext(context => context.contentRef);

  const setOpen = useDialogContext(context => context.setOpen);
  const mountNode = useDialogContext(context => context.mountNode);
  const trapFocus = useDialogContext(context => context.trapFocus);
  const { modalAttributes } = useModalAttributes({ trapFocus });

  const state: DialogSurfaceState = {
    mountNode,
    components: {
      root: 'div',
    },
    root: getNativeElementProps('div', {
      ref: useMergedRefs(ref, contentRef),
      role: trapFocus ? 'dialog' : 'complementary',
      'aria-modal': trapFocus ? true : undefined,
      ...modalAttributes,
      ...props,
    }),
  };

  const {
    onMouseEnter: onMouseEnterOriginal,
    onMouseLeave: onMouseLeaveOriginal,
    onKeyDown: onKeyDownOriginal,
  } = state.root;
  state.root.onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseEnterOriginal?.(e);
  };

  state.root.onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseLeaveOriginal?.(e);
  };

  state.root.onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // only close if the event happened inside the current popover
    // If using a stack of inline popovers, the user should call `stopPropagation` to avoid dismissing the entire stack
    if (e.key === 'Escape' && contentRef.current?.contains(e.target as HTMLDivElement)) {
      setOpen(e, false);
    }

    onKeyDownOriginal?.(e);
  };

  return state;
};
