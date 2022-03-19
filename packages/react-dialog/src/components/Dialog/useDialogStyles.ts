import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@pongo-ui/react-theme';
import type { DialogState } from './Dialog.types';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    inset: '0px',
    '-webkit-tap-highlight-color': 'transparent',
    transitionProperty: 'opacity',
    transitionDuration: tokens.transitionDuration,
    transitionTimingFunction: tokens.transitionTimingFunction,
    ':before': {
      content: "''",
      position: 'fixed',
      display: 'flex',
      inset: '0px',
      backgroundColor: tokens.textColor,
      opacity: '.5',
      '-webkit-tap-highlight-color': 'transparent',
    },
  },

  open: {
    opacity: '1',
  },

  closed: {
    opacity: '0',
  },

  dialogBox: {
    cursor: 'auto',
    display: 'inline-flex',
    backgroundColor: tokens.canvasColor,
    ...shorthands.padding(tokens.focusedLayout),
    flexDirection: 'column',
    flexShrink: 0,
    ...shorthands.gap(tokens.focusedLayout),
    filter: tokens.elevate,
    ...shorthands.borderRadius(tokens.rounded),
    outlineStyle: 'none',
  },
});

export const useDialogStyles = (state: DialogState): DialogState => {
  const styles = useStyles();

  state.root.className = mergeClasses(styles.root, state.open ? styles.open : styles.closed, state.root.className);

  if (state.dialogBox) {
    state.dialogBox.className = mergeClasses(styles.dialogBox, state.dialogBox.className);
  }

  return state;
};
