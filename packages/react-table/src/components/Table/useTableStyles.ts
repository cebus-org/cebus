import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { TableState } from './Table.types';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import { tokens } from '@pongo-ui/react-theme';

const useRootStyles = makeStyles({
  root: {},
});

export const useTableStyles = (state: TableState) => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(rootStyles.root, state.root.className);

  return state;
};
