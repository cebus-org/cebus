import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { TableFooterProps, TableFooterState } from './TableFooter.types';

export const useTableFooter = (props: TableFooterProps, ref: React.Ref<HTMLElement>): TableFooterState => {
  const state: TableFooterState = {
    components: {
      root: 'tfoot',
    },
    root: getNativeElementProps('tfoot', {
      ref,
      ...props,
    }),
  };

  return state;
};
