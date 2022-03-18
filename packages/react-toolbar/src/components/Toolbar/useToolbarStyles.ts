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
    backgroundColor: tokens.brand,
    filter: tokens.elevate,
    zIndex: 10000,

    '>*': {
      color: 'white !important',
      fill: 'white !important',
    },
  },

  relative: {
    position: 'relative',
  },

  sticky: {
    position: 'sticky',
  },

  contentPadding: {
    ...shorthands.padding('0px', '20px'),
  },
});

export const useToolbarStyles = (state: ToolbarState) => {
  const { contentPadding } = state;
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    rootStyles[state.position!],
    contentPadding && rootStyles.contentPadding,
    state.root.className,
  );

  return state;
};
