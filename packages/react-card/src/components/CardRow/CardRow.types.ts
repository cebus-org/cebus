import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type CardRowSlots = {
  /**
   * The root of CardRow.
   */
  root: Slot<'div'>;
};

export interface CardRowProps extends ComponentProps<CardRowSlots> {}

export type CardRowState = ComponentState<CardRowSlots>;
