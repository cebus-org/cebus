import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { TableCellState } from './TableCell.types';
import { tokens } from '@cebus/react-theme';

const useRootStyles = makeStyles({
  root: {
    display: 'table-cell',
    fontFamily: tokens.fontFamilyBase,
    verticalAlign: 'inherit',
    color: tokens.textColor,
    fontWeight: 'inherit',
    textAlign: 'left',
    ...shorthands.borderBottom('1px', 'solid', tokens.inheritBackground),
    ...shorthands.padding(tokens.focusedLayout),
  },
});

export const useTableCellStyles = (state: TableCellState) => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(rootStyles.root, state.root.className);

  return state;
};
