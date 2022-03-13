import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { LinkState } from '@fluentui/react-link';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import { tokens } from '@pongo-ui/react-theme';

const useRootStyles = makeStyles({
  focusIndicator: createCustomFocusIndicatorStyle({
    textDecorationLine: 'underline',
    textDecorationStyle: 'double',
  }),

  root: {
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSize300,
    fontWeight: tokens.regular,
    backgroundColor: 'transparent',
    ...shorthands.borderColor('transparent'),
    boxSizing: 'border-box',
    display: 'inline',
    ...shorthands.overflow('inherit'),
    ...shorthands.margin('0px'),
    ...shorthands.padding('0px'),
    textAlign: 'left',
    outlineStyle: 'none',
    textOverflow: 'inherit',
    textDecorationLine: 'none',
    userSelect: 'text',
  },

  disabled: {
    color: tokens.inheritDisabled,
    borderBottomColor: 'transparent',
    cursor: 'not-allowed',
  },

  enabled: {
    color: tokens.brand,
    cursor: 'pointer',
    ':hover': {
      color: tokens.brandHover,
      textDecorationLine: 'underline',
    },
    ':active': {
      color: tokens.brandPressed,
      textDecorationLine: 'underline',
    },
  },

  strong: {
    fontWeight: tokens.bold as any,
  },

  inline: {
    textDecorationLine: 'underline',
  },

  subtle: {
    color: tokens.inherit,

    ':hover': {
      color: tokens.inheritHover,
    },

    ':active': {
      color: tokens.inheritPressed,
    },
  },
});

export const useLinkStyles = (state: LinkState) => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    rootStyles.focusIndicator,
    state.disabled ? rootStyles.disabled : rootStyles.enabled,
    state.appearance === 'subtle' && rootStyles.subtle,
    state.inline && rootStyles.inline,

    state.root.className,
  );

  return state;
};
