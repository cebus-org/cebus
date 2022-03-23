import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { CarouselState } from './Carousel.types';
import { tokens } from '@pongo-ui/react-theme';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'inline-flex',
    backgroundColor: tokens.inheritBackground,
    flexDirection: 'row',
  },

  focusIndicator: createCustomFocusIndicatorStyle(
    {
      ':after': {
        content: "''",
        position: 'absolute',
        top: '-8px',
        right: '-8px',
        bottom: '-8px',
        left: '-8px',
        boxSizing: 'border-box',
        ...shorthands.border('10px', 'solid', tokens.textColor),
        ...shorthands.borderRadius(tokens.rounded),
      },
    },
    { selector: 'focus-within' },
  ),

  tabpanel: {
    position: 'relative',
    display: 'inline-flex',
    ...shorthands.overflow('hidden'),
  },
});

export const useCarouselStyles = (state: CarouselState) => {
  const styles = useStyles();

  state.root.className = mergeClasses(styles.root, state.root.className);

  state.tabpanel.className = mergeClasses(styles.tabpanel, styles.focusIndicator, state.tabpanel.className);

  return state;
};
