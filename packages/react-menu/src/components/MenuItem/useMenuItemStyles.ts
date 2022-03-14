import { mergeClasses, makeStyles, shorthands } from '@griffel/react';
import type { MenuItemState } from '@fluentui/react-menu';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import { tokens } from '@pongo-ui/react-theme';

export const menuFocusRectColor = `--pongo-menu-item-focus-color`;

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    height: '32px',
    ...shorthands.padding('0px', '10px'),
    backgroundColor: tokens.canvasColor,
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSize300,
    alignItems: 'center',
    userSelect: 'none',
    color: tokens.textColor,
    ...shorthands.gap('4px'),
  },

  enabled: {
    cursor: 'pointer',
    [menuFocusRectColor]: tokens.textColor,
    ':hover': {
      backgroundColor: tokens.brandForegroundHover,
    },
    ':active': {
      backgroundColor: tokens.brandForegroundPressed,
    },
    ':focus-within': {
      backgroundColor: tokens.brandForegroundPressed,
    },
  },

  disabled: {
    cursor: 'not-allowed',
    [menuFocusRectColor]: tokens.inheritDisabled,
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
        ...shorthands.border('2px', 'solid', `var(${menuFocusRectColor})`),
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

  if (state.secondaryContent) {
    state.secondaryContent.className = mergeClasses(styles.description, state.secondaryContent.className);
  }

  if (state.icon) {
    state.icon.className = mergeClasses(styles.icon, state.icon.className);
  }

  if (state.submenuIndicator) {
    state.submenuIndicator.className = mergeClasses(styles.icon, state.submenuIndicator.className);
  }

  return state;
};
