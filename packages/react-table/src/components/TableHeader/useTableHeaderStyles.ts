import { makeStyles, mergeClasses } from '@griffel/react';
import type { TableHeaderState } from './TableHeader.types';
import { tokens } from '@cebus/react-theme';

const useRootStyles = makeStyles({
  root: {
    display: 'table-header-group',
    verticalAlign: 'middle',
    fontWeight: tokens.bold,
  },
});

export const useTableHeaderStyles = (state: TableHeaderState) => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(rootStyles.root, state.root.className);

  return state;
};
