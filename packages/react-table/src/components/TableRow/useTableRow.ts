import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { TableRowProps, TableRowState } from './TableRow.types';

export const useTableRow = (props: TableRowProps, ref: React.Ref<HTMLElement>): TableRowState => {
  const state: TableRowState = {
    components: {
      root: 'tr',
    },
    root: getNativeElementProps('tr', {
      ref,
      ...props,
    }),
  };

  return state;
};
