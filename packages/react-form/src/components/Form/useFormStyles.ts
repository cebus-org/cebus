import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { FormState } from './Form.types';
import { tokens } from '@cebus/react-theme';

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',

    flexWrap: 'wrap',
  },

  focused: {
    ...shorthands.gap(tokens.focusedLayout),
  },

  relaxed: {
    ...shorthands.gap(tokens.relaxedLayout),
  },
});

export const useFormStyles = (state: FormState) => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    state.appearance === 'focused' ? rootStyles.focused : rootStyles.relaxed,
    state.root.className,
  );

  return state;
};
