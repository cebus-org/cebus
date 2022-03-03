import { mergeClasses, makeStyles, shorthands } from '@griffel/react';
import { tokens } from '@pongo-ui/react-theme';
import type { MenuPopoverState } from '@fluentui/react-menu';

const useStyles = makeStyles({
  root: {
    width: 'max-content',
    minWidth: '128px',
    maxWidth: '300px',
    backgroundColor: tokens.canvasColor,
    ...shorthands.borderRadius(tokens.rounded),
    filter: tokens.elevate,
  },
});

export const useMenuPopoverStyles = (state: MenuPopoverState): MenuPopoverState => {
  const styles = useStyles();
  state.root.className = mergeClasses(styles.root, state.root.className);
  return state;
};
