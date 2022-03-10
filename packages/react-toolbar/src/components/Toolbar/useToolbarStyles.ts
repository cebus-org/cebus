import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import type { ToolbarState } from './Toolbar.types';
import { tokens } from '@pongo-ui/react-theme';

export const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'inline-flex',
  },
});

export const useToolbarStyles = (state: ToolbarState) => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(rootStyles.root, state.root.className);

  return state;
};
