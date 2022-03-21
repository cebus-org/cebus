import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { TableFooterState, TableFooterSlots } from './TableFooter.types';

export const renderTableFooter = (state: TableFooterState) => {
  const { slots, slotProps } = getSlots<TableFooterSlots>(state);

  return <slots.root {...slotProps.root} />;
};
