import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { FormControlState } from './FormControl.types';
import { tokens } from '@cebus/react-theme';

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'inline-flex',
    ...shorthands.gap(tokens.focusedLayout),
  },

  vertical: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  componentWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
});

export const useFormControlStyles = (state: FormControlState) => {
  const styles = useRootStyles();

  state.root.className = mergeClasses(
    styles.root,
    state.labelPosition === 'above' ? styles.vertical : styles.horizontal,
    state.root.className,
  );

  state.componentWrapper.className = mergeClasses(styles.componentWrapper, state.componentWrapper.className);
  return state;
};
