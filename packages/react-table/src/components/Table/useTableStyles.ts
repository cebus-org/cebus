import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { TableState } from './Table.types';

const useRootStyles = makeStyles({
  root: {
    display: 'table',
    borderCollapse: 'separate',
    boxSizing: 'border-box',
    textIndent: 'initial',
    width: '100%',
    ...shorthands.borderColor('inherit'),
    borderSpacing: '0',
  },
});

export const useTableStyles = (state: TableState) => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(rootStyles.root, state.root.className);

  return state;
};
