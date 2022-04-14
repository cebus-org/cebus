import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@cebus/react-theme';
import type { AccordionHeaderState } from './AccordionHeader.types';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSize300,
  },

  enabled: {
    cursor: 'pointer',
    color: tokens.textColor,
  },

  disabled: {
    cursor: 'not-allowed',
    color: tokens.inheritDisabled,
  },

  button: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    ...shorthands.borderColor('transparent'),
    backgroundColor: 'transparent',
    boxSizing: 'content-box',
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'normal',
    WebkitAppearance: 'button',
    userSelect: 'none',
    textAlign: 'unset',
  },

  small: {
    height: '32px',
    fontSize: tokens.fontSize200,
  },

  medium: {
    height: '45px',
    fontSize: tokens.fontSize300,
  },

  large: {
    fontSize: tokens.fontSize400,
  },

  rootInline: {
    display: 'inline-block',
  },

  inline: {
    display: 'inline-flex',
  },

  ['extra-large']: {
    fontSize: tokens.fontSize500,
  },

  expandIcon: {
    '& svg': {
      transitionProperty: 'transform',
      transitionDuration: tokens.transitionDuration,
      transitionTimingFunction: tokens.transitionTimingFunction,
      fill: tokens.inherit,
    },
  },
});

export const useAccordionHeaderStyles = (state: AccordionHeaderState) => {
  const styles = useStyles();

  state.root.className = mergeClasses(
    styles.root,
    state.inline && styles.rootInline,
    state.disabled ? styles.disabled : styles.enabled,

    state.root.className,
  );

  state.button.className = mergeClasses(
    styles.button,
    state.disabled ? styles.disabled : styles.enabled,
    styles[state.size!],
    state.inline && styles.inline,
    state.button.className,
  );

  if (state.expandIcon) {
    state.root.className = mergeClasses(styles.expandIcon, state.button.className);
  }

  return state;
};
