import { mergeClasses, makeStyles, shorthands } from '@griffel/react';
import type { RadioGroupState } from './RadioGroup.types';
import { tokens } from '@pongo-ui/react-theme';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    ...shorthands.gap(tokens.focusedLayout),
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
