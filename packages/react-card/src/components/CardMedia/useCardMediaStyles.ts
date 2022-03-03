import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { CardMediaState } from './CardMedia.types';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    ...shorthands.margin('0px -12px'),

    '> *': {
      display: 'block',
      width: '100%',
    },
  },

  logo: {
    position: 'absolute',
    bottom: '12px',
    left: '12px',
    width: '32px',
    height: '32px',
  },
});

export const useCardMediaStyles = (state: CardMediaState) => {
  const styles = useStyles();

  state.root.className = mergeClasses(styles.root, state.root.className);

  if (state.logo) {
    state.logo.className = mergeClasses(styles.logo, state.logo.className);
  }

  return state;
};
