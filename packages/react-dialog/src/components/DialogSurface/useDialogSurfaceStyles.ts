import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@fluentui/react-theme';
import type { DialogSurfaceState } from './DialogSurface.types';

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow16,
    ...shorthands.borderRadius('4px'),
    ...shorthands.border('1px', 'solid', tokens.colorTransparentStroke),
  },
});

export const useDialogSurfaceStyles = (state: DialogSurfaceState): DialogSurfaceState => {
  const styles = useStyles();
  state.root.className = mergeClasses(styles.root, state.root.className);

  return state;
};
