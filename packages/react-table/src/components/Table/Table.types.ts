import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type TableSlots = {
  /**
   * The root of the Table.
   */
  root: Slot<'table'>;
};

type TableCommons = {
  /**
   * The label to be read by the screen reader.
   */
  label: string;
};

export type TableProps = ComponentProps<TableSlots> & TableCommons;

export type TableState = ComponentState<TableSlots> & TableCommons;
