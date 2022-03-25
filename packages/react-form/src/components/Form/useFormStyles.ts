import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { FormState } from './Form.types';
import { tokens } from '@pongo-ui/react-theme';

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    ...shorthands.gap(tokens.focusedLayout),
    flexWrap: 'wrap',
  },
});

export const useFormStyles = (state: FormState) => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(rootStyles.root, state.root.className);

  return state;
};
