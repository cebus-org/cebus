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
    backgroundColor: 'rgba(0, 0, 0, .5)',

    '-webkit-tap-highlight-color': 'transparent',
  },

  dialogBox: {
    display: 'inline-flex',
    backgroundColor: tokens.canvasColor,
    ...shorthands.padding(tokens.focusedLayout),
    flexDirection: 'column',
    flexShrink: 0,
    ...shorthands.gap(tokens.focusedLayout),
    filter: tokens.elevate,
    ...shorthands.borderRadius(tokens.rounded),
  },
});

export const useDialogStyles = (state: DialogState): DialogState => {
  const styles = useStyles();

  state.root.className = mergeClasses(styles.root, state.root.className);

  if (state.dialogBox) {
    state.dialogBox.className = mergeClasses(styles.dialogBox, state.dialogBox.className);
  }

  return state;
};
