import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { ToolbarState } from './Toolbar.types';
import { tokens } from '@pongo-ui/react-theme';

const useRootStyles = makeStyles({
  root: {
    top: '0px',
    height: '48px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxSizing: 'border-box',
    flexShrink: 0,
    filter: tokens.elevate,
    zIndex: 10000,
  },

  primary: {
    backgroundColor: tokens.brand,

    '>*': {
      color: 'white !important',
      fill: 'white !important',
    },
  },

  subtle: {
    backgroundColor: tokens.canvasColor,
  },

  relative: {
    position: 'relative',
  },

  sticky: {
    position: 'sticky',
  },

  fixed: {
    position: 'fixed',
  },

  contentPadding: {
    ...shorthands.padding('0px', tokens.focusedLayout),
  },
});

export const useToolbarStyles = (state: ToolbarState) => {
  const { contentPadding } = state;
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    rootStyles[state.position!],
    rootStyles[state.appearance!],
    contentPadding && rootStyles.contentPadding,
    state.root.className,
  );

  return state;
};
