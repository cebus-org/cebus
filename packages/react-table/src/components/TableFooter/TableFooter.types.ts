import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type TableFooterSlots = {
  /**
   * The root of the TableFooter.
   */
  root: Slot<'tfoot'>;
};

type TableFooterCommons = {};

export type TableFooterProps = ComponentProps<TableFooterSlots> & TableFooterCommons;

export type TableFooterState = ComponentState<TableFooterSlots> & TableFooterCommons;
