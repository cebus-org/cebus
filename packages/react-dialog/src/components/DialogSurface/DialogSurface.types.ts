import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import type { DialogContextValue } from '../../dialogContext';

export type DialogSurfaceSlots = {
  root: Slot<'div'>;
};

export type DialogSurfaceProps = ComponentProps<DialogSurfaceSlots>;

export type DialogSurfaceState = ComponentState<DialogSurfaceSlots> & Pick<DialogContextValue, 'mountNode'>;
