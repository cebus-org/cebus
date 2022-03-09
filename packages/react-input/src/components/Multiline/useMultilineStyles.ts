import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { MultilineState } from './Multiline.types';
import { tokens } from '@pongo-ui/react-theme';

export const useMultilineStyles = (state: MultilineState) => {
  // const rootStyles = useInputElementStyles();

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
