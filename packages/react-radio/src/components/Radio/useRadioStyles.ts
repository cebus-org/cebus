import { mergeClasses, makeStyles, shorthands } from '@griffel/react';
import { tokens } from '@pongo-ui/react-theme';
import type { RadioState } from './Radio.types';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';

const indicatorClassName = 'pongo-radio-indicator';
const labelClassName = 'pongo-radio-label';

const useRootStyles = makeStyles({
  root: {
    display: 'inline-flex',
    position: 'relative',
    columnGap: '8px',
    alignItems: 'center',
  },

  vertical: {
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '8px',
  },

  focusIndicator: createCustomFocusIndicatorStyle(
    {
      ':after': {
        content: "''",
        position: 'absolute',
        top: '-4px',
        right: '-4px',
        bottom: '-4px',
        left: '-4px',
        boxSizing: 'border-box',
        ...shorthands.border('2px', 'solid', tokens.textColor),
        ...shorthands.borderRadius(tokens.square),
      },
    },
    { selector: 'focus-within' },
  ),
});

const useInputStyles = makeStyles({
  input: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    opacity: 0,
    ...shorthands.margin(0),

    [`:not(:checked) ~ .${indicatorClassName} > *`]: {
      transform: 'scale(0%)',
    },
  },

  enabled: {
    cursor: 'pointer',
    ':enabled:not(:checked)': {
      [`& ~ .${labelClassName}`]: {
        color: tokens.inherit,
      },
      [`& ~ .${indicatorClassName}`]: {
        ...shorthands.borderColor(tokens.brand),
      },

      ':hover': {
        [`& ~ .${labelClassName}`]: {
          color: tokens.inheritHover,
        },
        [`& ~ .${indicatorClassName}`]: {
          ...shorthands.borderColor(tokens.brandHover),
        },
      },

      ':hover:active': {
        [`& ~ .${labelClassName}`]: {
          color: tokens.inheritPressed,
        },
        [`& ~ .${indicatorClassName}`]: {
          ...shorthands.borderColor(tokens.brandPressed),
        },
      },
    },

    ':enabled:checked': {
      [`& ~ .${labelClassName}`]: {
        color: tokens.textColor,
      },
      [`& ~ .${indicatorClassName}`]: {
        ...shorthands.borderColor(tokens.brand),
        color: tokens.brand,
      },

      ':hover': {
        [`& ~ .${indicatorClassName}`]: {
          ...shorthands.borderColor(tokens.brandHover),
          color: tokens.brandHover,
        },
      },

      ':hover:active': {
        [`& ~ .${indicatorClassName}`]: {
          ...shorthands.borderColor(tokens.brandPressed),
          color: tokens.brandPressed,
        },
      },
    },
  },

  disabled: {
    cursor: 'not-allowed',
    [`& ~ .${labelClassName}`]: {
      color: tokens.inheritDisabled,
    },
    [`& ~ .${indicatorClassName}`]: {
      ...shorthands.borderColor(tokens.inheritDisabled),
      color: tokens.inheritDisabled,
    },
  },
});

const useIndicatorStyles = makeStyles({
  indicator: {
    display: 'flex',
    width: '16px',
    height: '16px',
    boxSizing: 'border-box',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',

    ...shorthands.overflow('hidden'),
    ...shorthands.border('2px', 'solid'),
    ...shorthands.borderRadius(tokens.circle),

    '& svg': {
      width: '10px',
      fill: tokens.brand,
      transitionProperty: ' transform',
      transitionDuration: '.2s',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1) 0m',
    },
  },
});

const useLabelStyles = makeStyles({
  label: {
    alignSelf: 'center',
    userSelect: 'none',
    fontFamily: tokens.fontFamilyBase,
    color: tokens.textColor,
    fontSize: tokens.fontSize300,
  },
});

export const useRadioStyles = (state: RadioState): RadioState => {
  const rootStyles = useRootStyles();
  const labelStyles = useLabelStyles();
  const indicatorStyles = useIndicatorStyles();
  const inputStyles = useInputStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    rootStyles.focusIndicator,
    state.labelPosition === 'below' && rootStyles.vertical,
    state.root.className,
  );

  state.input.className = mergeClasses(
    inputStyles.input,
    state.input.disabled ? inputStyles.disabled : inputStyles.enabled,
    state.input.className,
  );

  if (state.label) {
    state.label.className = mergeClasses(labelClassName, labelStyles.label, state.label.className);
  }

  if (state.indicator) {
    state.indicator.className = mergeClasses(indicatorClassName, indicatorStyles.indicator, state.indicator.className);
  }

  return state;
};
