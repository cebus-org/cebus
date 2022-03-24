import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { CarouselState } from './Carousel.types';
import { tokens } from '@pongo-ui/react-theme';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'inline-flex',
    ...shorthands.border('1px', 'solid', tokens.inheritBackground),
    ...shorthands.borderRadius(tokens.rounded),
    flexDirection: 'row',
  },

  tabpanel: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    ...shorthands.overflow('hidden'),
    outlineStyle: 'none',
  },

  arrow: {
    position: 'absolute',
    width: '34px',
    height: '34px',
    flexShrink: 0,
    flexGrow: 0,
    ...shorthands.borderStyle('none'),
    opacity: '20%',
    ...shorthands.borderRadius(tokens.circle),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    filter: tokens.elevate,
    backgroundColor: tokens.canvasColor,
    cursor: 'pointer',
    outlineStyle: 'none',
    ...shorthands.margin(tokens.focusedLayout),
    top: '50%',
    ':hover': {
      opacity: '50%',
    },
    ':active': {
      opacity: '60%',
    },
  },

  backArrow: {
    left: '0px',
  },

  forwardArrow: {
    right: '0px',
  },

  radioIndicator: {
    position: 'absolute',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    boxSizing: 'border-box',
    ...shorthands.padding(tokens.focusedLayout),
    justifyContent: 'center',
    bottom: '0px',
    backgroundColor: tokens.canvasColor,
    opacity: '70%',
    width: '100%',
  },
});

export const useCarouselStyles = (state: CarouselState) => {
  const styles = useStyles();

  state.root.className = mergeClasses(styles.root, state.root.className);

  state.tabpanel.className = mergeClasses(styles.tabpanel, state.tabpanel.className);

  if (state.backArrow) {
    state.backArrow.className = mergeClasses(styles.arrow, styles.backArrow, state.backArrow.className);
  }

  if (state.forwardArrow) {
    state.forwardArrow.className = mergeClasses(styles.arrow, styles.forwardArrow, state.forwardArrow.className);
  }

  if (state.radioIndicator) {
    state.radioIndicator.className = mergeClasses(styles.radioIndicator, state.radioIndicator.className);
  }

  return state;
};
