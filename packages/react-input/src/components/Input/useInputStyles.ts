import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import type { InputState } from './Input.types';
import { tokens } from '@pongo-ui/react-theme';

export const inputHeight = `--pongoai-input-height`;

export const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: inputHeight,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    color: tokens.textColor,
    backgroundColor: tokens.canvasColor,
    fontFamily: tokens.baseFont,
  },

  // Appearance
  outline: {
    border: `2px solid ${tokens.inherit}`,
    borderRadius: '4px',
  },

  standard: {
    borderBottom: `2px solid ${tokens.inherit}`,
  },

  filled: {
    background: tokens.inheritForegroundPressed,
    ...shorthands.borderRadius(tokens.rounded, tokens.rounded, tokens.square, tokens.square),
    ...shorthands.borderBottom(`2px solid ${tokens.inherit}`),
  },

  // Size
  small: {
    height: '35px',
    width: '150px',
    fontSize: tokens.fontSize200,
  },

  medium: {
    height: '45px',
    width: '200px',
    fontSize: tokens.fontSize300,
  },

  large: {
    height: '50px',
    width: '300px',
    fontSize: tokens.fontSize400,
  },

  // Focus
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
});

const useContentStyles = makeStyles({
  base: {
    boxSizing: 'border-box',
    '> svg': { display: 'block' },
  },

  enabled: {
    color: tokens.inherit,
    fill: tokens.inherit,
  },

  disabled: {
    color: tokens.inheritDisabled,
    fill: tokens.inheritDisabled,
  },
});

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
    backgroundColor: 'red',
    ':focus-visible': {
      outlineStyle: 'none',
    },
  },

  enabled: {
    color: tokens.textColor,
    '::placeholder': {
      color: tokens.canvasColor,
      opacity: 1,
    },
  },

  disabled: {
    color: tokens.inheritDisabled,
    '::placeholder': {
      color: tokens.inheritDisabled,
      opacity: 1,
    },
  },
});

export const useInputStyles = (state: InputState) => {
  const styles = useStyles();
  const inputStyles = useInputElementStyles();
  const contentStyles = useContentStyles();

  state.root.className = mergeClasses(
    styles.root,
    styles[state.size!],
    styles[state.appearance!],
    styles.focusIndicator,
    state.root.className,
  );

  state.input.className = mergeClasses(
    inputStyles.input,
    state.disabled ? inputStyles.disabled : inputStyles.enabled,
    state.input.className,
  );

  const contentClasses = [contentStyles.base, state.disabled ? contentStyles.disabled : contentStyles.enabled];

  if (state.contentBefore) {
    state.contentBefore.className = mergeClasses(...contentClasses, state.contentBefore.className);
  }
  if (state.contentAfter) {
    state.contentAfter.className = mergeClasses(...contentClasses, state.contentAfter.className);
  }

  return state;
};
