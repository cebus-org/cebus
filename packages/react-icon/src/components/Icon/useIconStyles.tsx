import { makeStyles, mergeClasses } from '@griffel/react';
import { IconState } from './Icon.types';

export const fillCSSVariable = `--pongo-icon-fill`;

const useRootStyles = makeStyles({
  root: {
    display: 'inline-block',
    verticalAlign: 'middle',
    fill: `var(${fillCSSVariable})`,
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
});

export const useIconStyles = (state: IconState) => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(rootStyles.root, rootStyles[state.size!], state.root.className);

  return state;
};
