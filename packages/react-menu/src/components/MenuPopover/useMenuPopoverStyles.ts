import { mergeClasses, makeStyles } from '@griffel/react';
import { tokens } from '@cebus/react-theme';
import type { MenuPopoverState } from '@fluentui/react-menu';

const useStyles = makeStyles({
  root: {
    width: 'max-content',
    minWidth: '150px',
    maxWidth: '350px',
    backgroundColor: tokens.canvasColor,
    filter: tokens.elevate,
  },
});

export const useMenuPopoverStyles = (state: MenuPopoverState): MenuPopoverState => {
  const styles = useStyles();
  state.root.className = mergeClasses(styles.root, state.root.className);
  return state;
};
