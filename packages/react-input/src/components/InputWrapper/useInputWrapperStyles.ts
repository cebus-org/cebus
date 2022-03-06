import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import type { InputState } from './InputWrapper.types';
import { tokens } from '@pongo-ui/react-theme';

export const inputHeight = `--pongoai-input-height`;

export const useRootStyles = makeStyles({
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
    ...shorthands.border('2px', 'solid', tokens.inherit),
    ...shorthands.borderRadius(tokens.rounded),
  },

  standard: {
    ...shorthands.borderBottom('2px', 'solid', tokens.inherit),
  },

  filled: {
    backgroundColor: tokens.inheritForegroundPressed,
    ...shorthands.borderRadius(tokens.rounded, tokens.rounded, tokens.square, tokens.square),
    ...shorthands.borderBottom('2px', 'solid', tokens.inherit),
  },

  enabled: {
    transitionProperty: 'border-width',
    transitionDuration: '.1s',
    transitionDelay: 'cubic-bezier(0.33, 0.0, 0.67, 1)',

    ':focus-within': {
      ...shorthands.borderColor(tokens.brand),
    },
  },

  disabled: {
    ...shorthands.borderColor(tokens.inheritDisabled),
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

  before: {
    paddingLeft: '10px',
  },

  after: {
    paddingRight: '10px',
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

export const useInputWrapperStyles = (state: InputState) => {
  const rootStyles = useRootStyles();
  const contentStyles = useContentStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    rootStyles[state.size!],
    rootStyles[state.appearance!],
    rootStyles.focusIndicator,
    state.disabled ? rootStyles.disabled : rootStyles.enabled,
    state.root.className,
  );

  const contentClasses = [contentStyles.base, state.disabled ? contentStyles.disabled : contentStyles.enabled];

  if (state.contentBefore) {
    state.contentBefore.className = mergeClasses(
      ...contentClasses,
      contentStyles.before,
      state.contentBefore.className,
    );
  }
  if (state.contentAfter) {
    state.contentAfter.className = mergeClasses(...contentClasses, contentStyles.after, state.contentAfter.className);
  }

  return state;
};
