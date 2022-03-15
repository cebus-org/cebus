import { makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@pongo-ui/react-theme';
import type { ProviderState } from './Provider.types';

// Apps that are wrapped in the provider will all have these default styles applied.
const useStyles = makeStyles({
  root: {
    color: tokens.textColor,
    backgroundColor: tokens.canvasColor,
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSize300,
    fontWeight: tokens.regular,
  },
});

export const useProviderStyles = (state: ProviderState) => {
  const styles = useStyles();

  state.root.className = mergeClasses(state.themeClassName, styles.root, state.root.className);

  return state;
};
