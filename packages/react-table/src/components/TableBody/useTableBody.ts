import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { TableBodyProps, TableBodyState } from './TableBody.types';

export const useTableBody = (props: TableBodyProps, ref: React.Ref<HTMLElement>): TableBodyState => {
  const state: TableBodyState = {
    components: {
      root: 'tbody',
    },
    root: getNativeElementProps('tbody', {
      ref,
      ...props,
    }),
  };

  return state;
};
