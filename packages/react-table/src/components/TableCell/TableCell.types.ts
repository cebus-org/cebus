import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type TableCellSlots = {
  /**
   * The root of the TableCell.
   */
  root: Slot<'th'>;
};

type TableCellCommons = {};

export type TableCellProps = ComponentProps<TableCellSlots> & TableCellCommons;

export type TableCellState = ComponentState<TableCellSlots> & TableCellCommons;
