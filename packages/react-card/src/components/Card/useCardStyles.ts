import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { CardState } from './Card.types';
import { tokens } from '@cebus/react-theme';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';

const useStyles = makeStyles({
  root: {
    flexDirection: 'column',
    backgroundColor: tokens.canvasColor,
    ...shorthands.padding(tokens.focusedLayout),
    flexShrink: 0,
    ...shorthands.gap(tokens.focusedLayout),
    ...shorthands.borderStyle('none'),
  },

  focusIndicator: (createCustomFocusIndicatorStyle as any)(
    {
      ':after': {
        content: "''",
        position: 'absolute',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0x',
        boxSizing: 'border-box',
        ...shorthands.border('2px', 'solid', tokens.textColor),
        ...shorthands.borderRadius(tokens.rounded),
      },
    },
    { selector: 'focus-within' },
  ),

  inline: {
    display: 'inline-flex',
  },

  flex: {
    display: 'flex',
  },

  /**
   * Appearance styles
   */
  elevate: {
    filter: tokens.elevate,
  },

  outline: {
    ...shorthands.border('1px', 'solid', tokens.inherit),
  },

  /**
   * Interactive styles
   */
  intractable: {
    cursor: 'pointer',
    ':hover': {
      backgroundColor: tokens.inheritForegroundHover,
    },

    ':active': {
      backgroundColor: tokens.inheritForegroundPressed,
    },
  },

  disabled: {
    cursor: 'not-allowed',
  },

  /**
   * Shape styles
   */
  rounded: {
    ...shorthands.borderRadius(tokens.rounded),
  },

  circular: {
    ...shorthands.borderRadius(tokens.circular),
  },

  circle: {
    ...shorthands.borderRadius(tokens.circle),
  },

  square: {
    ...shorthands.borderRadius(tokens.square),
  },
});

export const useCardStyles = (state: CardState) => {
  const styles = useStyles();

  state.root.className = mergeClasses(
    styles.root,
    !state.disabled && state.root.onClick && styles.focusIndicator && styles.intractable,
    styles[state.appearance!],
    styles[state.shape!],
    state.inline ? styles.inline : styles.flex,
    state.disabled && styles.disabled,
    state.root.className,
  );

  return state;
};
