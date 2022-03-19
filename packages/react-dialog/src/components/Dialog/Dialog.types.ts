import * as React from 'react';
import type { PopperVirtualElement, usePopperMouseTarget } from '@fluentui/react-positioning';
import type { PortalProps } from '@fluentui/react-portal';

/**
 * Events handled by the Dialog.
 */
export type OpenDialogEvents =
  | MouseEvent
  | TouchEvent
  | React.MouseEvent<HTMLElement>
  | React.KeyboardEvent<HTMLElement>
  | React.FocusEvent<HTMLElement>;

/**
 * Data attached to open/close events
 */
export type OnOpenChangeData = { open: boolean };

type DialogCommons = Pick<PortalProps, 'mountNode'> & {
  /**
   * Controlled value to handle the opening of the Dialog.
   */
  open: boolean;

  /**
   * Uncontrolled value to handle the opening of the Dialog.
   */
  defaultOpen?: boolean;

  /**
   * Call back when the component requests to change value
   * The `open` value is used as a hint when directly controlling the component
   */
  onOpenChange?: (e: OpenDialogEvents, data: OnOpenChangeData) => void;

  /**
   * Should trap focus
   */
  trapFocus?: boolean;
};

export type DialogProps = Partial<DialogCommons> & {
  children: [JSX.Element, JSX.Element] | JSX.Element;
};

export type DialogState = DialogCommons &
  Pick<DialogProps, 'children'> & {
    /**
     * Callback to open/close the Dialog
     */
    setOpen: (e: OpenDialogEvents, open: boolean) => void;

    /**
     * Callback to toggle the open state of the Dialog
     */
    toggleOpen: (e: OpenDialogEvents) => void;

    /**
     * Ref of the DialogTrigger
     */
    triggerRef: React.MutableRefObject<HTMLElement | null>;

    /**
     * Ref of the DialogSurface
     */
    contentRef: React.MutableRefObject<HTMLElement | null>;

    /**
     * Anchors the popper to the mouse click for context events
     */
    contextTarget: PopperVirtualElement | undefined;

    /**
     * A callback to set the target of the popper to the mouse click for context events
     */
    setContextTarget: ReturnType<typeof usePopperMouseTarget>[1];

    dialogTrigger?: React.ReactElement;

    dialogSurface?: React.ReactElement;
  };
