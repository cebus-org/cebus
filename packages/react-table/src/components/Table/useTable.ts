import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { TableProps, TableState } from './Table.types';

export const useTable = (props: TableProps, ref: React.Ref<HTMLElement>): TableState => {
  const { label } = props;

  const state: TableState = {
    label,
    components: {
      root: 'table',
    },
    root: getNativeElementProps('table', {
      ref,
      ...props,
    }),
  };

  state.root['aria-label'] = label;

  return state;
};
