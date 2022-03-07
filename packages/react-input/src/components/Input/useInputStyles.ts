import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { InputState } from './Input.types';
import { tokens } from '@pongo-ui/react-theme';

export const useInputElementStyles = makeStyles({
  input: {
    ...shorthands.margin('0px'),
    ...shorthands.padding('0px'),
    ...shorthands.borderStyle('none'),
    boxSizing: 'border-box',
    flexGrow: 1,
    minWidth: 0,
    height: '100%',
    paddingLeft: '10px',
    paddingRight: '10px',
    backgroundColor: 'transparent',
    ':focus-visible': {
      outlineStyle: 'none',
    },
  },

  small: {
    fontSize: tokens.fontSize200,
  },

  medium: {
    fontSize: tokens.fontSize300,
  },

  large: {
    fontSize: tokens.fontSize400,
  },

  danger: {
    color: tokens.textColor,
    '::placeholder': {
      color: tokens.danger,
    },
  },

  enabled: {
    cursor: 'text',
    color: tokens.textColor,
    '::placeholder': {
      color: tokens.inherit,
      opacity: 1,
    },
  },

  disabled: {
    cursor: 'not-allowed',
    color: tokens.inheritDisabled,
    '::placeholder': {
      color: tokens.inheritDisabled,
      opacity: 1,
    },
  },

  dangerDisabled: {
    cursor: 'not-allowed',
    color: tokens.dangerDisabled,
    '::placeholder': {
      color: tokens.dangerDisabled,
      opacity: 1,
    },
  },
});

export const useInputStyles = (state: InputState) => {
  const rootStyles = useInputElementStyles();

  state.input.className = mergeClasses(
    rootStyles.input,
    state.disabled ? rootStyles.disabled : rootStyles.enabled,
    !state.disabled && state.danger && rootStyles.danger,
    state.disabled && state.danger && rootStyles.dangerDisabled,
    rootStyles[state.size!],
    state.input.className,
  );

  return state;
};
