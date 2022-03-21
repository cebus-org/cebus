import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { TableState, TableSlots } from './Table.types';

export const renderTable = (state: TableState) => {
  const { slots, slotProps } = getSlots<TableSlots>(state);

  return <slots.root {...slotProps.root} />;
};
