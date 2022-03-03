import { mergeClasses, makeStyles } from '@griffel/react';
import type { MenuListState } from '@fluentui/react-menu';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const useMenuListStyles = (state: MenuListState): MenuListState => {
  const styles = useStyles();
  state.root.className = mergeClasses(styles.root, state.root.className);
  return state;
};
