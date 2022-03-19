import { createContext, useContextSelector } from '@fluentui/react-context-selector';
import type { ContextSelector, Context } from '@fluentui/react-context-selector';
import type { DialogState } from './components/Dialog/index';

/**
 * Context shared between Dialog and its children components
 */
export type DialogContextValue = Pick<
  DialogState,
  'toggleOpen' | 'setOpen' | 'triggerRef' | 'contentRef' | 'mountNode' | 'trapFocus'
>;

export const DialogContext: Context<DialogContextValue> = createContext<DialogContextValue>({
  setOpen: () => null,
  toggleOpen: () => null,
  triggerRef: { current: null },
  contentRef: { current: null },
  trapFocus: false,
});

export const useDialogContext = <T>(selector: ContextSelector<DialogContextValue, T>): T =>
  useContextSelector(DialogContext, selector);
