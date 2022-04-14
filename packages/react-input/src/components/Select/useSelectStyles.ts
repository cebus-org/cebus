import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { SelectState } from './Select.types';
import { tokens } from '@cebus/react-theme';
import { inputLineHeight } from '../InputWrapper';

const useSelectElementStyles = makeStyles({
  select: {
    ...shorthands.margin('0px'),
    ...shorthands.padding('0px', '10px'),
    ...shorthands.borderStyle('none'),
    ...shorthands.borderRadius(tokens.rounded),
    display: 'flex',
    boxSizing: 'border-box',
    flexGrow: 1,
    minHeight: `var(${inputLineHeight})`,
    minWidth: '100px',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
    ':focus-visible': {
      outlineStyle: 'none',
    },
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
    '-o-appearance': 'none',
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
    cursor: 'pointer',
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

  labelLowerText: {
    paddingTop: '10px',
  },

  labelPlaceholderFocus: {
    '::placeholder': {
      opacity: '0',
    },
    ':focus': {
      '::placeholder': {
        opacity: '1',
        color: tokens.inherit,
      },
    },
  },
});

export const useSelectStyles = (state: SelectState) => {
  const rootStyles = useSelectElementStyles();

  state.selectValue.className = mergeClasses(
    rootStyles.select,
    state.disabled ? rootStyles.disabled : rootStyles.enabled,
    !state.disabled && state.danger && rootStyles.danger,
    state.disabled && state.danger && rootStyles.dangerDisabled,
    state.label && state.placeholder && !state.root.contentBefore && rootStyles.labelPlaceholderFocus,
    state.label && (state.appearance === 'filled' || state.appearance === 'standard') && rootStyles.labelLowerText,
    rootStyles[state.size!],
    state.selectValue.className,
  );

  state.root.className = mergeClasses(state.disabled ? rootStyles.disabled : rootStyles.enabled, state.root.className);

  return state;
};
