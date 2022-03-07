import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import type { InputWrapperState } from './InputWrapper.types';
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
    ':before': {
      content: '""',
      position: 'absolute',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
      userSelect: 'none',
      pointerEvents: 'none',
      ...shorthands.border('1px', 'solid', tokens.inherit),
      ...shorthands.borderRadius(tokens.rounded),
    },
  },

  standard: {
    ':before': {
      content: '""',
      position: 'absolute',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
      userSelect: 'none',
      pointerEvents: 'none',
      ...shorthands.borderBottom('1px', 'solid', tokens.textColor),
    },
  },

  filled: {
    backgroundColor: tokens.inheritForegroundPressed,
    ...shorthands.borderRadius(tokens.rounded, tokens.rounded, tokens.square, tokens.square),

    ':before': {
      content: '""',
      position: 'absolute',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
      userSelect: 'none',
      pointerEvents: 'none',
      ...shorthands.borderBottom('1px', 'solid', tokens.inherit),
    },
  },

  defaultFocus: {
    ':focus-within': {
      ':before': {
        ...shorthands.borderColor(tokens.brand),
        ...shorthands.borderWidth('2px'),
      },
    },
  },

  dangerFocus: {
    ':focus-within': {
      ':before': {
        ...shorthands.borderColor(tokens.danger),
        ...shorthands.borderWidth('2px'),
      },
    },
  },

  enabled: {
    ':before': {
      transitionProperty: 'border-width',
      transitionDuration: '.1s',
      transitionDelay: 'cubic-bezier(0.33, 0.0, 0.67, 1)',
      boxSizing: 'border-box',
    },
  },

  disabled: {
    ':before': {
      ...shorthands.borderColor(tokens.inheritDisabled),
    },
  },

  disabledDanger: {
    ':before': {
      ...shorthands.borderColor(tokens.dangerDisabled),
    },
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

  // Danger
  danger: {
    ':before': {
      ...shorthands.borderColor(tokens.danger),
    },
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

  danger: {
    color: tokens.danger,
    fill: tokens.danger,
  },

  disabled: {
    color: tokens.inheritDisabled,
    fill: tokens.inheritDisabled,
  },

  disabledDanger: {
    color: tokens.dangerDisabled,
    fill: tokens.dangerDisabled,
  },
});

export const useInputWrapperStyles = (state: InputWrapperState) => {
  const rootStyles = useRootStyles();
  const contentStyles = useContentStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    rootStyles[state.size!],
    rootStyles[state.appearance!],
    rootStyles.focusIndicator,
    state.danger && rootStyles.danger,
    state.disabled ? rootStyles.disabled : rootStyles.enabled,
    !state.disabled && (state.danger ? rootStyles.dangerFocus : rootStyles.defaultFocus),
    state.disabled && state.danger && rootStyles.disabledDanger,
    state.root.className,
  );

  const contentClasses = [
    contentStyles.base,
    state.disabled ? contentStyles.disabled : contentStyles.enabled,
    state.danger && contentStyles.danger,
    state.disabled && state.danger && contentStyles.disabledDanger,
  ];

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
