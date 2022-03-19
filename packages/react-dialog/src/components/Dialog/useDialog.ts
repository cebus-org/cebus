import * as React from 'react';
import {
  useControllableState,
  useEventCallback,
  useOnClickOutside,
  useOnScrollOutside,
} from '@fluentui/react-utilities';
import { useFluent } from '@fluentui/react-shared-contexts';
import { usePopper, resolvePositioningShorthand, usePopperMouseTarget } from '@fluentui/react-positioning';
import { elementContains } from '@fluentui/react-portal';
import { useFocusFinders } from '@fluentui/react-tabster';
import type { OpenDialogEvents, DialogProps, DialogState } from './Dialog.types';

function useOpenState(
  state: Pick<DialogState, 'setContextTarget' | 'onOpenChange'> & Pick<DialogProps, 'open' | 'defaultOpen'>,
) {
  const [open, setOpenState] = useControllableState({
    state: state.open,
    defaultState: state.defaultOpen,
    initialState: false,
  });

  const onOpenChange: DialogState['onOpenChange'] = useEventCallback((e, data) => state.onOpenChange?.(e, data));

  const setContextTarget = state.setContextTarget;

  const setOpen = React.useCallback(
    (ev: OpenDialogEvents, shouldOpen: boolean) => {
      if (shouldOpen && ev.type === 'contextmenu') {
        setContextTarget(ev as React.MouseEvent);
      }

      if (!shouldOpen) {
        setContextTarget(undefined);
      }

      setOpenState(prevOpen => {
        if (prevOpen !== shouldOpen) {
          onOpenChange?.(ev, { open: shouldOpen });
        }

        return shouldOpen;
      });
    },
    [setOpenState, onOpenChange, setContextTarget],
  );

  state.open = open !== undefined ? open : state.open;

  return [open, setOpen] as const;
}

/**
 * Assigns refs to Dialog trigger and surface.
 */
function useDialogRefs() {
  const { targetRef: triggerRef, containerRef: contentRef } = usePopper();

  return {
    triggerRef,
    contentRef,
  } as const;
}

/**
 * Create the state required to render Dialog.
 */
export const useDialog = (props: DialogProps): DialogState => {
  const { targetDocument } = useFluent();
  const [contextTarget, setContextTarget] = usePopperMouseTarget();
  const initialState = {
    size: 'medium',
    contextTarget,
    setContextTarget,
    ...props,
  } as const;
  const [open, setOpen] = useOpenState(initialState);
  const { targetRef: triggerRef, containerRef: contentRef } = usePopper();

  const toggleOpen = React.useCallback<DialogState['toggleOpen']>(
    ev => {
      setOpen(ev, !open);
    },
    [setOpen, open],
  );

  const popperRefs = useDialogRefs();

  useOnClickOutside({
    contains: elementContains,
    element: targetDocument,
    callback: ev => setOpen(ev, false),
    refs: [popperRefs.triggerRef, popperRefs.contentRef],
    disabled: !open,
  });

  useOnScrollOutside({
    contains: elementContains,
    element: targetDocument,
    callback: ev => setOpen(ev, false),
    refs: [popperRefs.triggerRef, popperRefs.contentRef],
    disabled: !open,
  });

  const { findFirstFocusable } = useFocusFinders();

  React.useEffect(() => {
    if (open && popperRefs.contentRef.current) {
      const firstFocusable = findFirstFocusable(popperRefs.contentRef.current);
      firstFocusable?.focus();
    }
  }, [findFirstFocusable, open, popperRefs.contentRef]);

  const children = React.Children.toArray(props.children) as React.ReactElement[];

  if (process.env.NODE_ENV !== 'production') {
    if (children.length === 0) {
      // eslint-disable-next-line no-console
      console.warn('Dialog must contain at least one child');
    }
    if (children.length > 2) {
      // eslint-disable-next-line no-console
      console.warn('Dialog must contain at most two children');
    }
  }

  let dialogTrigger: React.ReactElement | undefined = undefined;
  let dialogSurface: React.ReactElement | undefined = undefined;

  if (children.length === 2) {
    dialogTrigger = children[0];
    dialogSurface = children[1];
  } else if (children.length === 1) {
    dialogSurface = children[0];
  }

  return {
    ...initialState,
    ...popperRefs,
    dialogTrigger,
    dialogSurface,
    open,
    setOpen,
    toggleOpen,
    setContextTarget,
    contextTarget,
  };
};
