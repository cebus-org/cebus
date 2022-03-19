import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
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

export type DialogSlots = {
  /**
   * The root of the Dialog.
   */
  root: Slot<'div'>;

  /**
   * The dialogBox that the content is rendered within.
   */
  dialogBox?: Slot<'div'>;
};

type DialogCommons = Pick<PortalProps, 'mountNode'> & {
  /**
   * Controlled value to handle the opening of the Dialog.
   */
  open: boolean;

  /**
   * Call back for when the Dialog is opened or closed.
   */
  onOpenChange?: (ev: OpenDialogEvents, data: OnOpenChangeData) => void;
};

export type DialogProps = ComponentProps<DialogSlots> & DialogCommons;

export type DialogState = ComponentState<DialogSlots> & DialogCommons;
