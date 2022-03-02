import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import type { ButtonState } from './Button.types';
import { tokens } from '@pongo-ui/react-theme';

export const backgroundCSSVariable = `--pongoai-button-background-color`;
export const hoverCSSVariable = `--pongoai-button-hover-color`;
export const pressedCSSVariable = `--pongoai-button-pressed-color`;
export const foregroundHoverCSSVariable = `--pongoai-foreground-hover-color`;
export const foregroundPressedCSSVariable = `--pongoai-foreground-pressed-color`;

export const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    transitionProperty: 'background, box-shadow',
    transitionDuration: '.1s',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1) 0m',
    fontFamily: tokens.baseFont,
    fontStyle: 'normal',
    fontWeight: tokens.regular as any,
    outlineStyle: 'none',
  },

  focusIndicator: createCustomFocusIndicatorStyle(
    {
      ':after': {
        content: "''",
        position: 'absolute',
        top: '-8px',
        right: '-8px',
        bottom: '-8px',
        left: '-8px',
        boxSizing: 'border-box',
        ...shorthands.border('2px', 'solid', tokens.textColor),
        ...shorthands.borderRadius(tokens.rounded),
      },
    },
    { selector: 'focus-within' },
  ),

  /**
   * Disabled/Enabled styles
   */
  enabled: {
    cursor: 'pointer',
    '&:hover': {
      boxShadow: tokens.hoverShadow,
      // filter:
      //   `drop-shadow(0px 1px 0px rgba(0,0,0,0.2))` +
      //   `drop-shadow(0px 2px 1px rgb(0,0,0,.14))` +
      //   `drop-shadow(0px 1px 2px rgb(0,0,0,.12))`,
      // filter: 'drop-shadow(0px 1px 2px rgb(0,0,0,.12))',
      //boxShadow: '0px 1px 5px 0px rgb(0 0 0 / 82%)',
      // boxShadow:
      //   '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },
    '&:active': {
      boxShadow: 'none',
    },
  },

  disabled: {
    cursor: 'not-allowed',
  },

  /**
   * Size styles
   */
  small: {
    minWidth: '64px',
    height: '30px',
    ...shorthands.gap('5px'),
    ...shorthands.padding('0', '10px'),
    fontSize: tokens.fontSize200,
  },

  medium: {
    minWidth: '80px',
    height: '35px',
    ...shorthands.gap('6px'),
    ...shorthands.padding('0', '16px'),
    fontSize: tokens.fontSize300,
  },

  large: {
    minWidth: '96px',
    height: '45px',
    ...shorthands.gap('8px'),
    ...shorthands.padding('0', '22px'),
    fontSize: tokens.fontSize400,
  },

  /**
   * Shape styles
   */
  rounded: {
    ...shorthands.borderRadius(tokens.rounded),
  },

  circular: {
    ...shorthands.borderRadius(tokens.circular),
  },

  circle: {
    ...shorthands.borderRadius(tokens.circle),
  },

  square: {
    ...shorthands.borderRadius(tokens.square),
  },

  smallCircle: {
    minWidth: '30px',
    maxWidth: '30px',
  },

  mediumCircle: {
    minWidth: '35px',
    maxWidth: '35px',
  },

  largeCircle: {
    minWidth: '45px',
    maxWidth: '45px',
  },
});

export const useAppearanceStyles = makeStyles({
  /**
   * Appearance styles
   */
  outline: {
    backgroundColor: tokens.canvasColor,
    ...shorthands.border('2px', 'solid', `var(${backgroundCSSVariable})`),
    color: `var(${backgroundCSSVariable})`,
  },

  outlineEnabled: {
    '&:hover': {
      ...shorthands.borderColor(`var(${hoverCSSVariable})`),
      color: `var(${hoverCSSVariable})`,
      backgroundColor: `var(${foregroundHoverCSSVariable})`,
    },
    '&:active': {
      ...shorthands.borderColor(`var(${pressedCSSVariable})`),
      color: `var(${pressedCSSVariable})`,
      backgroundColor: `var(${foregroundPressedCSSVariable})`,
    },
  },

  primary: {
    backgroundColor: `var(${backgroundCSSVariable})`,
    ...shorthands.borderColor('transparent'),
    color: `white`,
  },

  primaryEnabled: {
    '&:hover': {
      backgroundColor: `var(${hoverCSSVariable})`,
    },
    '&:active': {
      backgroundColor: `var(${pressedCSSVariable})`,
    },
  },

  subtle: {
    ...shorthands.borderColor('transparent'),
    backgroundColor: tokens.canvasColor,
    color: `var(${backgroundCSSVariable})`,
  },

  subtleEnabled: {
    '&:hover': {
      color: `var(${hoverCSSVariable})`,
      backgroundColor: `var(${foregroundHoverCSSVariable})`,
    },
    '&:active': {
      color: `var(${pressedCSSVariable})`,
      backgroundColor: `var(${foregroundPressedCSSVariable})`,
    },
  },

  transparent: {
    ...shorthands.borderColor('transparent'),
    backgroundColor: 'transparent',
    color: `var(${backgroundCSSVariable})`,
  },

  transparentEnabled: {
    '&:hover': {
      boxShadow: 'none',
      color: `var(${hoverCSSVariable})`,
      textDecorationLine: 'underline',
    },
    '&:active': {
      color: `var(${pressedCSSVariable})`,
      textDecorationLine: 'underline',
    },
  },
});

export const useButtonStyles = (state: ButtonState) => {
  const rootStyles = useRootStyles();
  const appearanceStyles = useAppearanceStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    !state.disabled && rootStyles.focusIndicator,
    state.disabled ? rootStyles.disabled : rootStyles.enabled,
    appearanceStyles[state.appearance!],
    !state.disabled && (appearanceStyles as any)[state.appearance! + 'Enabled'],
    rootStyles[state.size!],
    rootStyles[state.shape!],
    state.shape === 'circle' && (rootStyles as any)[state.size! + 'Circle'],
    state.appearance === 'transparent' && !state.disabled && appearanceStyles.transparentEnabled,
    state.root.className,
  );

  return state;
};
