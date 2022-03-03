import { mergeClasses, makeStyles, shorthands } from '@griffel/react';
import type { MenuListState } from '@fluentui/react-menu';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.padding('10px', '0px'),
  },
});

export const useMenuListStyles = (state: MenuListState): MenuListState => {
  const styles = useStyles();
  state.root.className = mergeClasses(styles.root, state.root.className);
  return state;
};
