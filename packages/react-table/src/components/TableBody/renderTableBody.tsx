import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { TableBodyState, TableBodySlots } from './TableBody.types';

export const renderTableBody = (state: TableBodyState) => {
  const { slots, slotProps } = getSlots<TableBodySlots>(state);

  return <slots.root {...slotProps.root} />;
};
