import * as React from 'react';
import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type TableSlots = {
  /**
   * The root of the Table.
   */
  root: Slot<'div'>;
};

interface TableCommons {}

export interface TableProps extends ComponentProps<TableSlots>, TableCommons {}

export interface TableState extends ComponentState<TableSlots>, TableCommons {}
