import { mergeClasses, makeStyles, shorthands } from '@griffel/react';
import { tokens } from '@pongo-ui/react-theme';
import type { RadioState } from './Radio.types';

const useRootStyles = makeStyles({
  root: {
    display: 'inline-flex',
    position: 'relative',
    columnGap: '8px',
    ...shorthands.padding('10px'),
  },
});

const useLabelStyles = makeStyles({
  fontFamily: tokens.fontFamilyBase,
});

export const useRadioStyles = (state: RadioState): RadioState => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(rootStyles.root, state.root.className);

  return state;
};
