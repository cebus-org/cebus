import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { FormLabelState } from './FormLabel.types';
import { tokens } from '@pongo-ui/react-theme';

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'inline-flex',
    ...shorthands.gap(tokens.focusedLayout),
  },

  endVertical: {
    flexDirection: 'column-reverse',
  },

  endHorizontal: {
    flexDirection: 'row-reverse',
  },

  vertical: {
    flexDirection: 'column',
  },
});

export const useFormLabelStyles = (state: FormLabelState) => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    state.position === 'start' && state.vertical && rootStyles.vertical,
    state.position === 'end' && (state.vertical ? rootStyles.endVertical : rootStyles.endHorizontal),
    state.root.className,
  );

  return state;
};
