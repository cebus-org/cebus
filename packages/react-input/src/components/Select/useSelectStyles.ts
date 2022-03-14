import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { SelectState } from './Select.types';
import { tokens } from '@pongo-ui/react-theme';
import { inputLabelClassName, inputLegendClassName } from '../../index';
import { inputLineHeight, inputWidth } from '../InputWrapper';

const useSelectElementStyles = makeStyles({
  select: {
    ...shorthands.margin('0px'),
    ...shorthands.padding('0px', '10px'),
    ...shorthands.borderStyle('none'),
    ...shorthands.borderRadius(tokens.rounded),
    boxSizing: 'border-box',
    flexGrow: 1,
    minHeight: `var(${inputLineHeight})`,
    minWidth: `var(${inputWidth})`,
    height: '100%',
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

const useMenuStyles = makeStyles({
  defaultFocus: {
    backgroundColor: 'red',
    color: 'red',
    ':focus-within': {
      ':before': {
        ...shorthands.borderColor(tokens.brand),
        ...shorthands.borderWidth('2px'),
      },
      [`& .${inputLabelClassName}`]: {
        color: tokens.brand,
      },
      [`& .${inputLegendClassName}`]: {
        width: 'auto',
      },
    },
  },
});

export const useSelectStyles = (state: SelectState) => {
  const rootStyles = useSelectElementStyles();
  const menuStyles = useMenuStyles();

  state.select.className = mergeClasses(
    rootStyles.select,
    state.disabled ? rootStyles.disabled : rootStyles.enabled,
    !state.disabled && state.danger && rootStyles.danger,
    state.disabled && state.danger && rootStyles.dangerDisabled,
    state.label && state.placeholder && !state.root.contentBefore && rootStyles.labelPlaceholderFocus,
    state.label && (state.appearance === 'filled' || state.appearance === 'standard') && rootStyles.labelLowerText,
    rootStyles[state.size!],
    state.select.className,
  );

  state.menu.className = mergeClasses(
    'helloWorld',
    menuStyles.defaultFocus,
    // !state.disabled && (state.danger ? menuStyles.dangerFocus : menuStyles.defaultFocus),
    state.menu.className,
  );

  return state;
};
