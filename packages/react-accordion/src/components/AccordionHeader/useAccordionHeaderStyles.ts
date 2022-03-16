import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@pongo-ui/react-theme';
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

  expandIcon: {},
});

export const useAccordionHeaderStyles = (state: AccordionHeaderState) => {
  const styles = useStyles();

  state.root.className = mergeClasses(
    styles.root,
    state.disabled ? styles.disabled : styles.enabled,
    state.root.className,
  );

  state.button.className = mergeClasses(state.disabled ? styles.disabled : styles.enabled, state.button.className);

  if (state.expandIcon) {
    state.expandIcon.className = mergeClasses(styles.expandIcon, state.button.className);
  }

  return state;
};
