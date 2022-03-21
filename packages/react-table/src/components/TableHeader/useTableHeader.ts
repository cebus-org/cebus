import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { TableHeaderProps, TableHeaderState } from './TableHeader.types';

export const useTableHeader = (props: TableHeaderProps, ref: React.Ref<HTMLElement>): TableHeaderState => {
  const state: TableHeaderState = {
    components: {
      root: 'thead',
    },
    root: getNativeElementProps('thead', {
      ref,
      ...props,
    }),
  };

  return state;
};
