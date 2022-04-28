import { makeStyles, mergeClasses } from '@griffel/react';
import type { GridState } from './Grid.types';
import { tokens } from '@cebus/react-theme';

const gridContentWidth = `--cebus-grid-content-width`;

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(var(${gridContentWidth}), max-content))`,
    width: '100%',
  },

  focused: {
    gridGap: tokens.focusedLayout,
  },

  relaxed: {
    gridGap: tokens.relaxedLayout,
  },

  centerHorizontal: {
    justifyContent: 'center',
  },

  startHorizontal: {
    justifyContent: 'start',
  },

  endHorizontal: {
    justifyContent: 'end',
  },

  centerVertical: {
    alignItems: 'center',
  },

  startVertical: {
    alignItems: 'start',
  },

  endVertical: {
    alignItems: 'end',
  },
});

export const useGridStyles = (state: GridState) => {
  const styles = useStyles();

  const CSSVariables = {
    [gridContentWidth]: state.contentSize,
  };

  state.root.className = mergeClasses(
    styles.root,
    styles[state.appearance!],
    styles[(state.horizontalAlignment! + 'Horizontal') as 'endHorizontal' | 'startHorizontal' | 'centerHorizontal'],
    styles[(state.verticalAlignment! + 'Vertical') as 'endVertical' | 'startVertical' | 'centerVertical'],
    state.root.className,
  );

  state.root.style = {
    ...CSSVariables,
    ...state.root.style,
  };

  return state;
};
