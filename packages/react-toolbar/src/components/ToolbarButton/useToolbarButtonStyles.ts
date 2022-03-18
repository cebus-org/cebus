import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { ToolbarButtonState } from './ToolbarButton.types';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import { tokens } from '@pongo-ui/react-theme';

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    transitionProperty: 'background',
    transitionDuration: tokens.transitionDuration,
    transitionTimingFunction: tokens.transitionTimingFunction,
    fontFamily: tokens.fontFamilyBase,
    fontStyle: 'normal',
    fontWeight: tokens.regular,
    outlineStyle: 'none',
    backgroundColor: 'transparent',
    height: '100%',
    ...shorthands.gap('6px'),
    ...shorthands.padding('0', '10px'),
    ...shorthands.borderStyle('none'),
    textDecorationLine: 'none',
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
