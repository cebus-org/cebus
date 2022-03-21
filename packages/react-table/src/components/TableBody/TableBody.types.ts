import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type TableBodySlots = {
  /**
   * The root of the TableBody.
   */
  root: Slot<'tbody'>;
};

type TableBodyCommons = {};

export type TableBodyProps = ComponentProps<TableBodySlots> & TableBodyCommons;

export type TableBodyState = ComponentState<TableBodySlots> & TableBodyCommons;
