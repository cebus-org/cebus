import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { TextareaState } from './Textarea.types';
import { tokens } from '@pongo-ui/react-theme';
import { inputLineHeight, inputWidth } from '../InputWrapper';

const useTextAreaStyles = makeStyles({
  textarea: {
    position: 'relative',
    display: 'inline-flex',
    boxSizing: 'border-box',
    flexGrow: 1,
    minHeight: `var(${inputLineHeight})`,
    minWidth: `var(${inputWidth})`,
    height: `var(${inputLineHeight})`,
    width: `var(${inputWidth})`,
    fontFamily: tokens.fontFamilyBase,
    backgroundColor: 'transparent',
    ...shorthands.border('10px', 'solid', 'transparent'),
    ...shorthands.borderRadius(tokens.rounded),
    ':focus-visible': {
      outlineStyle: 'none',
    },
  },

  labelLowerText: {
    ...shorthands.borderTop('20px', 'solid', 'transparent'),
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
    textAreaStyles.textarea,
    state.autoAdjust && textAreaStyles.autoAdjust,
    textAreaStyles[state.size!],
    !state.resizable && textAreaStyles.disableResize,
    state.label && (state.appearance === 'filled' || state.appearance === 'standard') && textAreaStyles.labelLowerText,
    state.textarea.className,
  );

  return state;
};
