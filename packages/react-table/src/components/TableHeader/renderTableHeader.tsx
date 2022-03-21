import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { TableHeaderState, TableHeaderSlots } from './TableHeader.types';

export const renderTableHeader = (state: TableHeaderState) => {
  const { slots, slotProps } = getSlots<TableHeaderSlots>(state);

  return <slots.root {...slotProps.root} />;
};
