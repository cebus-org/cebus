import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { CardRowState } from './CardRow.types';
import { tokens } from '@cebus/react-theme';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 0,
    ...shorthands.gap(tokens.focusedLayout),
  },
});

export const useCardRowStyles = (state: CardRowState) => {
  const styles = useStyles();

  state.root.className = mergeClasses(styles.root, state.root.className);

  return state;
};
