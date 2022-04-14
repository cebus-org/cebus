import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { SwitchState } from './Switch.types';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import { tokens } from '@cebus/react-theme';

const rootClassName = 'cebus-Switch-root';
const trackClassName = 'cebus-Switch-track';
const thumbClassName = 'cebus-Switch-thumb';
const inputClassName = 'cebus-Switch-input';

const useRootStyles = makeStyles({
  root: {
    '--switch-width': '48px',
    '--switch-height': '28px',
    '--switch-thumb-size': '20px',
    '--switch-checked-opacity': '0',
    '--switch-unchecked-opacity': '0',

    position: 'relative',
    width: 'var(--switch-width)',
    height: 'var(--switch-height)',
    display: 'inline-block',
    userSelect: 'none',
    touchAction: 'none',
    verticalAlign: 'bottom',
  },

  focusIndicator: (createCustomFocusIndicatorStyle as any)(
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

  unchecked: {
    [`:hover .${thumbClassName}`]: {
      ':before': {
        backgroundColor: tokens.inheritHover,
      },
    },

    [`:hover .${trackClassName}`]: {
      ':before': {
        ...shorthands.borderColor(tokens.inheritHover),
      },
    },

    [`:active .${thumbClassName}`]: {
      ':before': {
        ...shorthands.borderColor(tokens.inheritPressed),
      },
    },

    [`:active .${trackClassName}`]: {
      ':before': {
        ...shorthands.borderColor(tokens.inheritPressed),
      },
    },
  },

  checked: {
    [`:hover .${trackClassName}`]: {
      ':after': {
        backgroundColor: tokens.brandHover,
      },
    },

    [`:active .${trackClassName}`]: {
      ':after': {
        backgroundColor: tokens.brandPressed,
      },
    },
  },

  enabled: {
    '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
    cursor: 'pointer',
  },

  disabled: {
    cursor: 'not-allowed',
  },
});

const useTrackStyles = makeStyles({
  track: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    touchAction: 'none',
    pointerEvents: 'none',

    ':before': {
      content: "''",
      position: 'absolute',
      top: '0px',
      left: '0px',
      bottom: '0px',
      right: '0px',
      boxSizing: 'border-box',
      ...shorthands.borderWidth('1.5px'),
      ...shorthands.borderStyle('solid'),
      opacity: 'var(--switch-unchecked-opacity)',
      ...shorthands.borderRadius(tokens.circular),
    },

    ':after': {
      content: "''",
      position: 'absolute',
      top: '0px',
      left: '0px',
      bottom: '0px',
      right: '0px',
      boxSizing: 'border-box',
      opacity: 'var(--switch-checked-opacity)',
      ...shorthands.borderRadius(tokens.circular),
    },
  },

  unchecked: {
    ':before': {
      ...shorthands.borderColor(tokens.inherit),
    },
  },

  checked: {
    ':after': {
      backgroundColor: tokens.brand,
    },
  },

  disabledUnchecked: {
    ':before': {
      ...shorthands.borderColor(tokens.inheritDisabled),
    },
  },

  disabledChecked: {
    ':after': {
      backgroundColor: tokens.inheritDisabled,
    },
  },
});

const useThumbWrapperStyles = makeStyles({
  thumbWrapper: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: 'calc(var(--switch-thumb-size) * .7)',
    right: 'calc(var(--switch-thumb-size) * .7)',
    touchAction: 'none',
    pointerEvents: 'none',
  },
});

const useThumbStyles = makeStyles({
  thumb: {
    position: 'absolute',
    width: 'var(--switch-thumb-size)',
    height: 'var(--switch-thumb-size)',
    boxSizing: 'border-box',
    ...shorthands.borderRadius(tokens.circle),
    top: '50%',
    transform: 'translate(-50%, -50%)',

    touchAction: 'none',
    pointerEvents: 'none',

    ':before': {
      position: 'absolute',
      top: '0px',
      left: '0px',
      bottom: '0px',
      right: '0px',
      ...shorthands.borderRadius(tokens.circle),
      content: "''",
      opacity: 'var(--switch-unchecked-opacity)',
    },

    ':after': {
      position: 'absolute',
      top: '0px',
      left: '0px',
      bottom: '0px',
      right: '0px',
      ...shorthands.borderRadius(tokens.circle),
      content: "''",
      opacity: 'var(--switch-checked-opacity)',
    },
  },

  unchecked: {
    ':before': {
      backgroundColor: tokens.inherit,
    },
  },

  checked: {
    ':after': {
      backgroundColor: 'white',
    },
  },

  disabledUnchecked: {
    ':before': {
      backgroundColor: tokens.inheritDisabled,
    },
  },

  disabledChecked: {
    ':after': {
      backgroundColor: 'white',
    },
  },
});

const useActiveRailStyles = makeStyles({
  activeRail: {
    position: 'absolute',
    left: 'calc(var(--switch-thumb-size) * .7)',
    right: 'calc(var(--switch-thumb-size) * .7)',
  },
});

const useInputStyle = makeStyles({
  input: {
    opacity: 0,
    position: 'absolute',
    ...shorthands.padding('0px'),
    ...shorthands.margin('0px'),
    width: '100%',
    height: '100%',
    touchAction: 'none',
    pointerEvents: 'none',
  },
});

export const useSwitchStyles = (state: SwitchState) => {
  const { checked, disabled } = state.input;

  const rootStyles = useRootStyles();
  const trackStyles = useTrackStyles();
  const thumbWrapperStyles = useThumbWrapperStyles();
  const thumbStyles = useThumbStyles();
  const activeRailStyles = useActiveRailStyles();
  const inputStyles = useInputStyle();

  state.root.className = mergeClasses(
    rootClassName + (checked ? ' checked' : ''),
    rootStyles.root,
    !disabled && rootStyles.focusIndicator,
    !disabled && rootStyles.checked,
    !disabled && rootStyles.unchecked,
    disabled ? rootStyles.disabled : rootStyles.enabled,
    state.root.className,
  );

  state.track.className = mergeClasses(
    trackClassName,
    trackStyles.track,
    !disabled && trackStyles.checked,
    !disabled && trackStyles.unchecked,
    disabled && trackStyles.disabledChecked,
    disabled && trackStyles.disabledUnchecked,
    state.track.className,
  );

  state.thumbWrapper.className = mergeClasses(thumbWrapperStyles.thumbWrapper, state.thumbWrapper.className);

  state.thumb.className = mergeClasses(
    thumbClassName,
    thumbStyles.thumb,
    !disabled && thumbStyles.checked,
    !disabled && thumbStyles.unchecked,
    disabled && thumbStyles.disabledChecked,
    disabled && thumbStyles.disabledUnchecked,
    state.thumb.className,
  );

  state.activeRail.className = mergeClasses(activeRailStyles.activeRail, state.activeRail.className);

  state.input.className = mergeClasses(inputClassName, inputStyles.input, state.input.className);

  return state;
};
