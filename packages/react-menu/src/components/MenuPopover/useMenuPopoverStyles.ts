import { mergeClasses, makeStyles } from '@griffel/react';
import { tokens } from '@pongo-ui/react-theme';
import type { MenuPopoverState } from '@fluentui/react-menu';

const useStyles = makeStyles({
  root: {
    width: 'max-content',
    minWidth: '128px',
    maxWidth: '300px',
    backgroundColor: tokens.canvasColor,
    filter: tokens.elevate,
    zIndex: 10000,
  },
});

export const useMenuPopoverStyles = (state: MenuPopoverState): MenuPopoverState => {
  const styles = useStyles();
  state.root.className = mergeClasses(styles.root, state.root.className);
  return state;
};
