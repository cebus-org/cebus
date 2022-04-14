import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import type { CheckboxState } from './Checkbox.types';
import { tokens } from '@cebus/react-theme';

const indicatorClassName = 'pongo-Checkbox-indicator';

const checkboxBackground = `--pongo-checkbox-background-color`;
const checkboxHover = `--pongo-checkbox-hover-color`;
const checkboxPressed = `--pongo-checkbox-pressed-color`;

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    width: '34px',
    height: '34px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    verticalAlign: 'middle',
  },

  checked: {
    [`& .${indicatorClassName}`]: {
      backgroundColor: `var(${checkboxBackground})`,
    },
    ':hover .pongo-Checkbox-indicator': {
      backgroundColor: `var(${checkboxHover})`,
    },
    ':active .pongo-Checkbox-indicator': {
      backgroundColor: `var(${checkboxPressed})`,
    },
  },

  unchecked: {
    [`& .${indicatorClassName}`]: {
      ...shorthands.border('2px', 'solid', `var(${checkboxBackground})`),
    },
    ':hover .pongo-Checkbox-indicator': {
      ...shorthands.borderColor(`var(${checkboxHover})`),
    },

    ':active .pongo-Checkbox-indicator': {
      ...shorthands.borderColor(`var(${checkboxPressed})`),
    },
  },

  focusIndicator: createCustomFocusIndicatorStyle(
    {
      ':after': {
        content: "''",
        position: 'absolute',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        boxSizing: 'border-box',
        ...shorthands.border('2px', 'solid', tokens.textColor),
        ...shorthands.borderRadius(tokens.rounded),
      },
    },
    { selector: 'focus-within' },
  ),
});

const useIndicatorStyles = makeStyles({
  indicator: {
    position: 'absolute',
    boxSizing: 'border-box',
    ...shorthands.borderRadius(tokens.rounded),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowStyle: 'hidden',
    transitionProperty: 'background',
    transitionDuration: tokens.transitionDuration,
    transitionTimingFunction: tokens.transitionTimingFunction,
    '& svg': {
      fill: 'white',
    },
  },

  medium: {
    width: '20px',
    height: '20px',
  },

  large: {
    width: '24px',
    height: '24px',
  },

  disabled: {},

  disabledChecked: {
    backgroundColor: `var(${checkboxBackground})`,
  },

  disabledUnchecked: {
    ...shorthands.border('2px', 'solid', `var(${checkboxBackground})`),
  },
});

const useInputStyles = makeStyles({
  input: {
    opacity: 0,
    position: 'absolute',
    ...shorthands.padding(0),
    ...shorthands.margin(0),
    width: '100%',
    height: '100%',
  },

  enabled: {
    cursor: 'pointer',
  },

  disabled: {
    cursor: 'not-allowed',
  },
});

export const useCheckboxStyles = (state: CheckboxState) => {
  const { color, size } = state;
  const rootStyles = useRootStyles();
  const indicatorStyle = useIndicatorStyles();
  const inputStyles = useInputStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    state.input.disabled && (state.input.checked ? rootStyles.checked : rootStyles.unchecked),
    !state.input.disabled && rootStyles.focusIndicator,
    state.root.className,
  );

  if (state.indicator) {
    state.indicator.className = mergeClasses(
      indicatorClassName,
      indicatorStyle.indicator,
      !state.input.disabled &&
        (state.input.checked ? indicatorStyle.disabledChecked : indicatorStyle.disabledUnchecked),
      indicatorStyle[size!],
      state.indicator.className,
    );
  }

  state.input.className = mergeClasses(
    inputStyles.input,
    state.input.disabled ? inputStyles.disabled : inputStyles.enabled,
    state.input.className,
  );

  const CSSVariables = {
    [checkboxBackground]: (tokens as any)[color + (state.input.disabled ? 'Disabled' : '')],
    [checkboxHover]: (tokens as any)[color + 'Hover'],
    [checkboxPressed]: (tokens as any)[color + 'Pressed'],
  };

  state.root.style = {
    ...CSSVariables,
    ...state.root.style,
  };

  return state;
};
