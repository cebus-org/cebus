import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { TableRowState } from './TableRow.types';

const useRootStyles = makeStyles({
  root: {
    display: 'table-row',
    verticalAlign: 'inherit',
    ...shorthands.borderColor('inherit'),
  },
});

export const useTableRowStyles = (state: TableRowState) => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(rootStyles.root, state.root.className);

  return state;
};
