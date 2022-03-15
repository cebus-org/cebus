import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { TextareaState } from './Textarea.types';
import { tokens } from '@pongo-ui/react-theme';
import { inputLineHeight, inputWidth } from '../InputWrapper';

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'inline-flex',
    boxSizing: 'border-box',
    // ...shorthands.padding('10px'),
  },
});

const useTextAreaStyles = makeStyles({
  textarea: {
    position: 'relative',
    display: 'inline-flex',
    boxSizing: 'border-box',
    minHeight: `var(${inputLineHeight})`,
    minWidth: `var(${inputWidth})`,
    fontFamily: tokens.fontFamilyBase,
    backgroundColor: 'transparent',
    ...shorthands.border('10px', 'solid', 'transparent'),
    ...shorthands.borderRadius(tokens.rounded),
    ':focus-visible': {
      outlineStyle: 'none',
    },
  },

  labelLowerText: {
    // paddingTop: '20px',
    //borderTop: '10px solid transparent',
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
  const rootStyles = useRootStyles();
  const textAreaStyles = useTextAreaStyles();

  state.root.className = mergeClasses(rootStyles.root, state.root.className);

  state.textarea.className = mergeClasses(
    textAreaStyles.textarea,
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
