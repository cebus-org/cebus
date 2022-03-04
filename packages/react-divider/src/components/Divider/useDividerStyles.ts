import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { DividerState } from './Divider.types';
import { tokens } from '@pongo-ui/react-theme';

const contentSpacing = '12px';
const insetSpacing = '12px';
const startEndMaxHeight = '8px';

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    fontFamily: tokens.baseFont,
    fontSize: tokens.fontSize200,
    fontWeight: tokens.regular,
    lineHeight: tokens.lineHeight200,

    ':before': {
      boxSizing: 'border-box',
      display: 'flex',
      flexGrow: 1,
    },

    ':after': {
      boxSizing: 'border-box',
      display: 'flex',
      flexGrow: 1,
    },
  },

  childless: {
    ':before': {
      marginBottom: 0,
      marginRight: 0,
    },

    ':after': {
      marginLeft: 0,
      marginTop: 0,
    },
  },

  inset: {
    marginTop: insetSpacing,
    marginBottom: insetSpacing,
  },

  // Positioning
  start: {
    ':after': {
      content: '""',
    },
  },
  center: {
    ':before': {
      content: '""',
    },
    ':after': {
      content: '""',
    },
  },
  end: {
    ':before': {
      content: '""',
    },
  },

  // Color
  inherit: {
    color: tokens.inherit,

    ':before': {
      ...shorthands.borderColor(tokens.inheritBackground),
    },
    ':after': {
      ...shorthands.borderColor(tokens.inheritBackground),
    },
  },

  brand: {
    color: tokens.brand,

    ':before': {
      ...shorthands.borderColor(tokens.brandBackground),
    },
    ':after': {
      ...shorthands.borderColor(tokens.brandBackground),
    },
  },
});

const useHorizontalStyles = makeStyles({
  base: {
    width: '100%',

    ':before': {
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
    },

    ':after': {
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
    },
  },

  inset: {
    paddingLeft: insetSpacing,
    paddingRight: insetSpacing,
  },

  start: {
    ':before': {
      content: '""',
      marginRight: contentSpacing,
      maxWidth: startEndMaxHeight,
    },

    ':after': {
      marginLeft: contentSpacing,
    },
  },
  center: {
    ':before': {
      marginRight: contentSpacing,
    },
    ':after': {
      marginLeft: contentSpacing,
    },
  },
  end: {
    ':before': {
      marginRight: contentSpacing,
    },
    ':after': {
      content: '""',
      marginLeft: contentSpacing,
      maxWidth: startEndMaxHeight,
    },
  },
});

const useVerticalStyles = makeStyles({
  base: {
    flexDirection: 'column',
    minHeight: '20px',

    ':before': {
      borderRightStyle: 'solid',
      borderRightWidth: '1px',
    },

    ':after': {
      borderRightStyle: 'solid',
      borderRightWidth: '1px',
    },
  },

  inset: {
    marginTop: insetSpacing,
    marginBottom: insetSpacing,
  },

  withChildren: {
    minHeight: '84px',
  },

  start: {
    ':before': {
      content: '""',
      marginBottom: contentSpacing,
      maxHeight: startEndMaxHeight,
    },

    ':after': {
      marginTop: contentSpacing,
    },
  },
  center: {
    ':before': {
      marginBottom: contentSpacing,
    },
    ':after': {
      marginTop: contentSpacing,
    },
  },
  end: {
    ':before': {
      marginBottom: contentSpacing,
    },
    ':after': {
      content: '""',
      marginTop: contentSpacing,
      maxHeight: startEndMaxHeight,
    },
  },
});

export const useDividerStyles = (state: DividerState) => {
  const { color, inset, vertical, alignContent } = state;
  const rootStyles = useRootStyles();
  const horizontalStyles = useHorizontalStyles();
  const verticalStyles = useVerticalStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    rootStyles[alignContent!],

    // Horizontal styles
    !vertical && horizontalStyles.base,
    !vertical && inset && horizontalStyles.inset,
    !vertical && horizontalStyles[alignContent!],

    // Vertical styles
    vertical && verticalStyles.base,
    vertical && inset && verticalStyles.inset,
    vertical && verticalStyles[alignContent!],
    vertical && state.root.children !== undefined && verticalStyles.withChildren,

    // Children
    state.root.children === undefined && rootStyles.childless,

    // Color
    rootStyles[color!],

    state.root.className,
  );

  return state;
};
