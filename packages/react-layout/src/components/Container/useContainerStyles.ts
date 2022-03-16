import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { ContainerState } from './Container.types';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
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
    ...shorthands.padding('15px', '15px'),
    ...shorthands.gap('15px'),
  },

  relaxed: {
    ...shorthands.padding('50px', '50px'),
    ...shorthands.gap('30px'),
  },
});

export const useContainerStyles = (state: ContainerState) => {
  const styles = useStyles();

  state.root.className = mergeClasses(
    styles.root,
    styles[state.appearance!],
    styles[(state.horizontalAlignment! + 'Horizontal') as 'endHorizontal' | 'startHorizontal' | 'centerHorizontal'],
    styles[(state.verticalAlignment! + 'Vertical') as 'endVertical' | 'startVertical' | 'centerVertical'],
    state.root.className,
  );

  return state;
};
