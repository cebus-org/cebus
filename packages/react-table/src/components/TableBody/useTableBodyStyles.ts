import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { TableBodyState } from './TableBody.types';
import { tokens } from '@pongo-ui/react-theme';

const useRootStyles = makeStyles({
  root: {
    display: 'table-row-group',
    verticalAlign: 'middle',
    ...shorthands.borderColor('inherit'),
    fontWeight: tokens.regular,
  },
});

export const useTableBodyStyles = (state: TableBodyState) => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(rootStyles.root, state.root.className);

  return state;
};
