import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { TextareaState } from './Textarea.types';
import { tokens } from '@pongo-ui/react-theme';

const useTextAreaStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'block',
    boxSizing: 'border-box',
    minHeight: '100%',
    minWidth: '100%',
    ...shorthands.borderStyle('none'),
    backgroundColor: 'transparent',
    ...shorthands.borderRadius(tokens.rounded),
    fontFamily: tokens.baseFont,
    // background: 'red',
    padding: '10px',
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

  disableResize: {
    resize: 'none',
  },

  autoAdjust: {
    overflow: 'hidden',
  },
});

export const useTextareaStyles = (state: TextareaState) => {
  const textAreaStyles = useTextAreaStyles();

  state.textarea.className = mergeClasses(
    textAreaStyles.root,
    state.autoAdjust && textAreaStyles.autoAdjust,
    textAreaStyles[state.size!],
    !state.resizable && textAreaStyles.disableResize,
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
