import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { TableCellProps, TableCellState } from './TableCell.types';

export const useTableCell = (props: TableCellProps, ref: React.Ref<HTMLElement>): TableCellState => {
  const state: TableCellState = {
    components: {
      root: 'th',
    },
    root: getNativeElementProps('th', {
      ref,
      ...props,
    }),
  };

  return state;
};
