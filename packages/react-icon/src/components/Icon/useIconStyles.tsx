import { makeStyles, mergeClasses } from '@griffel/react';
import { IconState } from './Icon.types';

export const fillCSSVariable = `--cebus-icon-fill`;

const useRootStyles = makeStyles({
  root: {
    display: 'inline-block',
    verticalAlign: 'middle',
    fill: `var(${fillCSSVariable})`,
  },

  white: {
    fill: 'white',
  },

  small: {
    width: '16px',
    height: '16px',
  },

  medium: {
    width: '24px',
    height: '24px',
  },

  large: {
    width: '32px',
    height: '32px',
  },

  display: {
    width: '128px',
    height: '128px',
  },
});

export const useIconStyles = (state: IconState) => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    rootStyles[state.size!],
    state.color === 'white' && rootStyles.white,
    state.root.className,
  );

  return state;
};
