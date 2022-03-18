import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { TabState } from '@fluentui/react-tabs';
import { tokens } from '@pongo-ui/react-theme';

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSize300,
    lineHeight: tokens.lineHeight300,
    alignItems: 'center',
    ...shorthands.overflow('hidden'),
    userSelect: 'none',
    backgroundColor: 'none',
    color: tokens.textColor,
    cursor: 'pointer',
  },

  // Positioning
  horizontal: {
    justifyContent: 'center',
  },

  vertical: {
    justifyContent: 'flex-start',
  },

  // Appearance
  subtle: {
    '&:hover': {
      color: tokens.inheritHover,
      backgroundColor: tokens.inheritForegroundHover,
    },
    '&:active': {
      color: tokens.inheritPressed,
      backgroundColor: tokens.inheritForegroundPressed,
    },
  },

  transparent: {},

  // Size
  small: {
    ...shorthands.gap(`calc(${tokens.focusedLayout}/2)`),
    ...shorthands.padding(`calc(${tokens.focusedLayout}/2)`),
  },

  medium: {
    ...shorthands.gap(tokens.focusedLayout),
    ...shorthands.padding(tokens.focusedLayout),
  },
});

const useContentStyles = makeStyles({
  small: {
    ...shorthands.padding(`calc(${tokens.focusedLayout}/2)`),
  },
  medium: {
    ...shorthands.padding(tokens.focusedLayout),
  },
});

export const useTabStyles = (state: TabState) => {
  const rootStyles = useRootStyles();
  const contentStyles = useContentStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    state.vertical ? rootStyles.vertical : rootStyles.horizontal,
    rootStyles[state.appearance as 'subtle' | 'transparent'],
    rootStyles[state.size!],
    state.root.className,
  );

  state.content.className = mergeClasses(contentStyles[state.size!], state.content.className);

  return state;
};
