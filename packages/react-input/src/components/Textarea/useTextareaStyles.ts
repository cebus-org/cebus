import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { TextareaState } from './Textarea.types';
import { tokens } from '@pongo-ui/react-theme';
import { inputLineHeight, inputWidth } from '../InputWrapper';

const useTextAreaStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'block',
    boxSizing: 'border-box',
    minHeight: `var(${inputLineHeight})`,
    minWidth: `var(${inputWidth})`,
    ...shorthands.borderStyle('none'),
    backgroundColor: 'transparent',
    ...shorthands.borderRadius(tokens.rounded),
    fontFamily: tokens.fontFamilyBase,
    padding: '10px',
    ':focus-visible': {
      outlineStyle: 'none',
    },
  },

  labelLowerText: {
    paddingTop: '20px',
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

  disableResize: {
    resize: 'none',
  },

  autoAdjust: {
    overflowStyle: 'hidden',
  },
});

export const useTextareaStyles = (state: TextareaState) => {
  const textAreaStyles = useTextAreaStyles();

  state.textarea.className = mergeClasses(
    textAreaStyles.root,
    state.autoAdjust && textAreaStyles.autoAdjust,
    textAreaStyles[state.size!],
    !state.resizable && textAreaStyles.disableResize,
    state.label && (state.appearance === 'filled' || state.appearance === 'standard') && textAreaStyles.labelLowerText,
    state.textarea.className,
  );
  // state.input.className = mergeClasses(
  //   rootStyles.input,
  //   state.disabled ? rootStyles.disabled : rootStyles.enabled,
  //   !state.disabled && state.danger && rootStyles.danger,

  //   state.disabled && state.danger && rootStyles.dangerDisabled,
  //   state.label && state.placeholder && !state.root.contentBefore && rootStyles.labelPlaceholderFocus,
  //   state.label && (state.appearance === 'filled' || state.appearance === 'standard') && rootStyles.labelLowerText,
  //   rootStyles[state.size!],
  //   state.input.className,
  // );

  return state;
};
