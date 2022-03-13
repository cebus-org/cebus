import { mergeClasses, makeStyles } from '@griffel/react';
import type { MenuItemState } from '@fluentui/react-menu';

export const useStyles = makeStyles({
  root: {},
});

export const useRadioStyles = (state: MenuItemState): MenuItemState => {
  const styles = useStyles();

  state.root.className = mergeClasses(styles.root, state.root.className);

  return state;
};
