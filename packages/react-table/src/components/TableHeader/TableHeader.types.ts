import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type TableHeaderSlots = {
  /**
   * The root of the TableHeader.
   */
  root: Slot<'thead'>;
};

type TableHeaderCommons = {};

export type TableHeaderProps = ComponentProps<TableHeaderSlots> & TableHeaderCommons;

export type TableHeaderState = ComponentState<TableHeaderSlots> & TableHeaderCommons;
