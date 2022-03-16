import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { StackState } from './Stack.types';

const useStyles = makeStyles({
  root: {},

  grow: {
    width: '100%',
    height: '100%',
  },

  inline: {
    display: 'inline-flex',
  },

  flex: {
    display: 'flex',
  },

  horizontal: {
    flexDirection: 'row',
  },

  vertical: {
    flexDirection: 'column',
  },

  centerHorizontal: {
    alignItems: 'center',
  },

  startHorizontal: {
    alignItems: 'start',
  },

  endHorizontal: {
    alignItems: 'end',
  },

  centerVertical: {
    justifyContent: 'center',
  },

  startVertical: {
    justifyContent: 'start',
  },

  endVertical: {
    justifyContent: 'end',
  },

  wrap: {
    flexWrap: 'wrap',
  },

  focused: {
    ...shorthands.gap('15px'),
  },

  relaxed: {
    ...shorthands.gap('30px'),
  },
});

export const useStackStyles = (state: StackState) => {
  const styles = useStyles();

  state.root.className = mergeClasses(
    styles.root,
    state.vertical ? styles.vertical : styles.horizontal,
    state.inline ? styles.inline : styles.flex,
    state.wrap && styles.wrap,
    state.grow && styles.grow,
    styles[state.appearance!],
    state.vertical
      ? styles[(state.horizontalAlignment! + 'Horizontal') as 'endHorizontal' | 'startHorizontal' | 'centerHorizontal']
      : styles[(state.horizontalAlignment! + 'Vertical') as 'endVertical' | 'startVertical' | 'centerVertical'],
    state.vertical
      ? styles[(state.verticalAlignment! + 'Vertical') as 'endVertical' | 'startVertical' | 'centerVertical']
      : styles[(state.verticalAlignment! + 'Horizontal') as 'endHorizontal' | 'startHorizontal' | 'centerHorizontal'],
    state.root.className,
  );

  return state;
};
