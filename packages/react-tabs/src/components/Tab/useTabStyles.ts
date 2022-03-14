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

  sunken: {
    boxShadow: `inset 0px 0px 3px 0px ${tokens.inheritBackground}`,
    '&:hover': {
      color: tokens.inheritHover,
      backgroundColor: tokens.inheritForegroundHover,
    },
    '&:active': {
      color: tokens.inheritPressed,
      backgroundColor: tokens.inheritForegroundPressed,
    },
  },

  // Size
  small: {
    ...shorthands.gap('2px'),
    ...shorthands.padding('6px'),
  },

  medium: {
    ...shorthands.gap('10px'),
    ...shorthands.padding('10px'),
  },
});

const useContentStyles = makeStyles({
  small: {
    ...shorthands.padding('6px'),
  },
  medium: {
    ...shorthands.padding('10px'),
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
