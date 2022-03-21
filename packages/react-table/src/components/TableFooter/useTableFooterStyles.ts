import { makeStyles, mergeClasses } from '@griffel/react';
import type { TableFooterState } from './TableFooter.types';

const useRootStyles = makeStyles({
  root: {
    display: 'table-footer-group',
    verticalAlign: 'middle',
  },
});

export const useTableFooterStyles = (state: TableFooterState) => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(rootStyles.root, state.root.className);

  return state;
};
