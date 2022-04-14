import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { ToolbarButtonState } from './ToolbarButton.types';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import { tokens } from '@cebus/react-theme';

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    height: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    ...shorthands.gap('6px'),
    ...shorthands.padding('0', tokens.focusedLayout),
    fontFamily: tokens.fontFamilyBase,
    fontStyle: 'normal',
    fontWeight: tokens.regular,
    fontSize: tokens.fontSize300,
    color: tokens.textColor,
    backgroundColor: 'transparent',
    transitionProperty: 'background',
    transitionDuration: tokens.transitionDuration,
    transitionTimingFunction: tokens.transitionTimingFunction,
    outlineStyle: 'none',
    textDecorationLine: 'none',
    ...shorthands.borderStyle('none'),
  },

  focusIndicator: (createCustomFocusIndicatorStyle as any)(
    {
      ':after': {
        content: "''",
        position: 'absolute',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        boxSizing: 'border-box',
        ...shorthands.border('2px', 'solid', tokens.textColor),
      },
    },
    { selector: 'focus-within' },
  ),

  primary: {
    '&:hover': {
      backgroundColor: tokens.brandHover,
    },
    '&:active': {
      backgroundColor: tokens.brandPressed,
    },
    '>*': {
      color: 'white !important',
      fill: 'white !important',
    },
  },

  subtle: {
    '&:hover': {
      backgroundColor: tokens.inheritForegroundHover,
    },
    '&:active': {
      backgroundColor: tokens.inheritForegroundPressed,
    },
  },

  enabled: {
    cursor: 'pointer',
  },

  disabled: {
    cursor: 'not-allowed',
  },
});

export const useToolbarButtonStyles = (state: ToolbarButtonState) => {
  const { disabled } = state;
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    rootStyles.focusIndicator,
    rootStyles[state.appearance!],
    disabled ? rootStyles.disabled : rootStyles.enabled,
    state.root.className,
  );

  return state;
};
