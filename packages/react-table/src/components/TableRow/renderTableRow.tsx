import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { TableRowState, TableRowSlots } from './TableRow.types';

export const renderTableRow = (state: TableRowState) => {
  const { slots, slotProps } = getSlots<TableRowSlots>(state);

  return <slots.root {...slotProps.root} />;
};
