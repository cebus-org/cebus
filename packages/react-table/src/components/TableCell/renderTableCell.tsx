import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { TableCellState, TableCellSlots } from './TableCell.types';

export const renderTableCell = (state: TableCellState) => {
  const { slots, slotProps } = getSlots<TableCellSlots>(state);

  return <slots.root {...slotProps.root} />;
};
