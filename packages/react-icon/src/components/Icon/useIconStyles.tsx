import { makeStyles, mergeClasses } from '@griffel/react';
import { IconState } from './Icon.types';
import { tokens } from '@pongo-ui/react-theme';

export const useRootStyles = makeStyles({
  root: {
    '& svg': {
      fill: tokens.textColor,
    },
  },

  smaller: {
    width: '20px',
    height: '20px',
    '& svg': {
      width: '20px',
      height: '20px',
    },
  },

  small: {
    width: '24px',
    height: '24px',
    '& svg': {
      width: '24px',
      height: '24px',
    },
  },

  medium: {
    width: '28px',
    height: '28px',
    '& svg': {
      width: '28px',
      height: '28px',
    },
  },

  large: {
    width: '32px',
    height: '32px',
    '& svg': {
      width: '32px',
      height: '32px',
    },
  },

  inherit: {
    '& svg': {
      fill: tokens.inherit,
    },
  },

  brand: {
    '& svg': {
      fill: tokens.brand,
    },
  },

  secondary: {
    '& svg': {
      fill: tokens.secondary,
    },
  },

  success: {
    '& svg': {
      fill: tokens.success,
    },
  },

  danger: {
    '& svg': {
      fill: tokens.danger,
    },
  },

  social: {
    '& svg': {
      fill: tokens.social,
    },
  },

  warning: {
    '& svg': {
      fill: tokens.warning,
    },
  },

  info: {
    '& svg': {
      fill: tokens.info,
    },
  },
});

export const useIconStyles = (state: IconState) => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    rootStyles[state.color!],
    rootStyles[state.size!],
    state.root.className,
  );

  return state;
};
