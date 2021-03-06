import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { ContainerState } from './Container.types';
import { tokens } from '@cebus/react-theme';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },

  wrap: {
    flexWrap: 'wrap',
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

  focused: {
    ...shorthands.padding(tokens.focusedLayout),
    ...shorthands.gap(tokens.focusedLayout),
  },

  relaxed: {
    ...shorthands.padding(tokens.relaxedLayout),
    ...shorthands.gap(tokens.relaxedLayout),
  },
});

export const useContainerStyles = (state: ContainerState) => {
  const styles = useStyles();

  state.root.className = mergeClasses(
    styles.root,
    styles[state.appearance!],
    state.wrap && styles.wrap,
    styles[(state.horizontalAlignment! + 'Horizontal') as 'endHorizontal' | 'startHorizontal' | 'centerHorizontal'],
    styles[(state.verticalAlignment! + 'Vertical') as 'endVertical' | 'startVertical' | 'centerVertical'],
    state.root.className,
  );

  return state;
};
