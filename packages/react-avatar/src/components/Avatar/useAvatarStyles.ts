import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { AvatarState } from './Avatar.types';
import { tokens } from '@pongo-ui/react-theme';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    fontFamily: tokens.baseFont,
    fontWeight: tokens.medium,
    verticalAlign: 'middle',
    color: 'white',
    display: 'flex',
    userSelect: 'none',
    flexShrink: 0,
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    ...shorthands.padding('0px'),
    ...shorthands.margin('0px'),
  },

  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    verticalAlign: 'top',
  },

  circular: { ...shorthands.borderRadius(tokens.circular) },

  square: { ...shorthands.borderRadius(tokens.square) },

  initials: {
    ...shorthands.padding('0px'),
    ...shorthands.margin('0px'),
  },

  small: {
    width: '28px',
    height: '28px',
    fontSize: tokens.fontSize300,
  },

  medium: {
    width: '35px',
    height: '35px',
    fontSize: tokens.fontSize400,
  },

  large: {
    width: '50px',
    height: '50px',
    fontSize: tokens.fontSize600,
  },

  'extra-large': {
    width: '70px',
    height: '70px',
    fontSize: tokens.fontSize800,
  },
});

export const useAvatarStyles = (state: AvatarState) => {
  const styles = useStyles();

  state.root.className = mergeClasses(styles.root, styles[state.shape!], styles[state.size!], state.root.className);

  if (state.initials) {
    state.initials.className = mergeClasses(styles.initials, state.initials.className);
  }

  if (state.image) {
    state.image.className = mergeClasses(styles.image, styles[state.shape!], state.image.className);
  }

  return state;
};
