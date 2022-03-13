import { mergeClasses, makeStyles } from '@griffel/react';
import type { RadioGroupState } from './RadioGroup.types';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
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
