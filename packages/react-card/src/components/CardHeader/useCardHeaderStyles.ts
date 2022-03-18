import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { CardHeaderState } from './CardHeader.types';
import { tokens } from '@pongo-ui/react-theme';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    ...shorthands.gap(tokens.focusedGap),
  },

  avatar: {
    display: 'flex',
    minWidth: '24px',
    minHeight: '24px',
    maxWidth: '32px',
    maxHeight: '32px',
    '> *': {
      minWidth: 'inherit',
      minHeight: 'inherit',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: 'inherit',
    justifyContent: 'center',
  },
});

export const useCardHeaderStyles = (state: CardHeaderState) => {
  const styles = useStyles();

  state.root.className = mergeClasses(styles.root, state.root.className);

  if (state.textContainer) {
    state.textContainer.className = mergeClasses(styles.textContainer, state.textContainer.className);
  }

  if (state.avatar) {
    state.avatar.className = mergeClasses(styles.avatar, state.avatar.className);
  }

  return state;
};
