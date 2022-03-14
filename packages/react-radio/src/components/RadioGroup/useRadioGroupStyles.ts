import { mergeClasses, makeStyles, shorthands } from '@griffel/react';
import type { RadioGroupState } from './RadioGroup.types';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    ...shorthands.gap('10px'),
  },

  vertical: {
    flexDirection: 'column',
  },
});

export const useRadioGroupStyles = (state: RadioGroupState): RadioGroupState => {
  const styles = useStyles();

  state.root.className = mergeClasses(
    styles.root,
    styles.root,
    state.layout === 'vertical' && styles.vertical,
    state.root.className,
  );

  return state;
};
