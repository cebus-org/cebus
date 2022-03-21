import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type TableRowSlots = {
  /**
   * The root of the TableRow.
   */
  root: Slot<'tr'>;
};

type TableRowCommons = {};

export type TableRowProps = ComponentProps<TableRowSlots> & TableRowCommons;

export type TableRowState = ComponentState<TableRowSlots> & TableRowCommons;
