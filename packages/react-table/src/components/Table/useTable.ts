import * as React from 'react';
import { getNativeElementProps, resolveShorthand, useId } from '@fluentui/react-utilities';
import type { TableProps, TableState } from './Table.types';

export const useTable = (props: TableProps, ref: React.Ref<HTMLElement>): TableState => {
  const state: TableState = {
    components: {
      root: 'div',
    },
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
  };

  return state;
};
