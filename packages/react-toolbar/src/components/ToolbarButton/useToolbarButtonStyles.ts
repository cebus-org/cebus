import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { ToolbarButtonState } from './ToolbarButton.types';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import { tokens } from '@pongo-ui/react-theme';

export const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    transitionProperty: 'background',
    transitionDuration: '.1s',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1) 0m',
    fontFamily: tokens.baseFont,
    fontStyle: 'normal',
    fontWeight: tokens.regular,
    outlineStyle: 'none',
    backgroundColor: 'transparent',
    height: '100%',
    minWidth: '48px',
    ...shorthands.padding('0', '10px'),
    ...shorthands.borderStyle('none'),
  },

  focusIndicator: createCustomFocusIndicatorStyle(
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

  enabled: {
    cursor: 'pointer',
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
    disabled ? rootStyles.disabled : rootStyles.enabled,
    state.root.className,
  );

  return state;
};
