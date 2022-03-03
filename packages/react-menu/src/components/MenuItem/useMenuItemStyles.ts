import { mergeClasses, makeStyles } from '@griffel/react';
import type { MenuItemState } from '@fluentui/react-menu';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import { tokens } from '@pongo-ui/react-theme';

export const useStyles = makeStyles({
  root: {
    position: 'relative',
    borderRadius: '4px',
    display: 'flex',
    height: '32px',
    padding: '0px 10px',
    background: tokens.canvasColor,
    fontFamily: tokens.baseFont,
    fontSize: tokens.fontSize300,
    alignItems: 'center',
    userSelect: 'none',
    color: tokens.textColor,
    gap: '4px',
  },

  enabled: {
    cursor: 'pointer',
    ':hover': {
      background: tokens.brandForegroundHover,
    },
    ':active': {
      background: tokens.brandForegroundPressed,
    },
    ':focus-within': {
      background: tokens.brandForegroundPressed,
    },
  },

  disabled: {
    cursor: 'not-allowed',
    color: tokens.inheritDisabled,
  },

  content: {
    paddingLeft: '2px',
    paddingRight: '2px',
    backgroundColor: 'transparent',
    flexGrow: 1,
  },

  description: {
    paddingLeft: '2px',
    paddingRight: '2px',

    color: tokens.inherit,
    ':hover': {
      color: tokens.inherit,
    },
    ':focus': {
      color: tokens.inherit,
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
        border: `2px solid ${tokens.textColor}`,
        borderRadius: '4px',
      },
    },
    { selector: 'focus-within' },
  ),

  icon: {
    width: '20px',
    height: '20px',
    lineHeight: '0',
    fontSize: '20px',
  },
});

export const useMenuItemStyles = (state: MenuItemState): MenuItemState => {
  const styles = useStyles();

  state.root.className = mergeClasses(
    styles.root,
    styles.focusIndicator,
    !state.disabled ? styles.enabled : styles.disabled,
  );

  if (state.content) {
    state.content.className = mergeClasses(styles.content, state.content.className);
  }

  if (state.description) {
    state.description.className = mergeClasses(styles.description, state.description.className);
  }

  if (state.icon) {
    state.icon.className = mergeClasses(styles.icon, state.icon.className);
  }

  if (state.submenuIndicator) {
    state.submenuIndicator.className = mergeClasses(styles.icon, state.submenuIndicator.className);
  }

  return state;
};
