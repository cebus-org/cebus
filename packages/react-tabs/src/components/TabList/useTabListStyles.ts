import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { TabListState } from './TabList.types';
import { indicatorLengthVar, indicatorOffsetVar } from '@fluentui/react-tabs';
import { tokens } from '@cebus/react-theme';

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    ':after': {
      transitionProperty: 'transform, width',
      transitionDuration: tokens.transitionDuration,
      transitionTimingFunction: tokens.transitionTimingFunction,
    },
  },

  horizontal: {
    flexDirection: 'row',
    ':after': {
      position: 'absolute',
      backgroundColor: tokens.brand,
      bottom: '5px',
      boxSizing: 'border-box',
      content: '""',
      height: '2px',
      ...shorthands.borderRadius(tokens.circular),
      width: `calc(var(${indicatorLengthVar}) - 20px)`,
      transform: `translateX(calc(var(${indicatorOffsetVar}) + 10px))`,
    },
  },

  vertical: {
    flexDirection: 'column',
    ':after': {
      position: 'absolute',
      backgroundColor: tokens.brand,
      left: '5px',
      boxSizing: 'border-box',
      content: '""',
      width: '2px',
      ...shorthands.borderRadius(tokens.circular),
      height: `calc(var(${indicatorLengthVar}) - 20px)`,
      transform: `translateY(calc(var(${indicatorOffsetVar}) + 10px))`,
    },
  },
});

const useRailStyles = makeStyles({
  rail: {
    ':before': {
      position: 'absolute',
      backgroundColor: tokens.inheritBackground,
      boxSizing: 'border-box',
      content: '""',
      ...shorthands.borderRadius(tokens.circular),
    },
  },

  horizontal: {
    ':before': {
      height: '2px',
      bottom: '5px',
      width: `calc(100% - 20px)`,
      transform: `translateX(10px)`,
    },
  },

  vertical: {
    ':before': {
      width: '2px',
      left: '5px',
      height: `calc(100% - 20px)`,
      transform: `translateY(10px)`,
    },
  },
});

export const useTabListStyles = (state: TabListState) => {
  const { rail, vertical, selectedTabRect: selectionIndicatorRect } = state;

  const rootStyles = useRootStyles();
  const railStyles = useRailStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    rail && railStyles.rail,
    rail && vertical ? railStyles.vertical : railStyles.horizontal,
    vertical ? rootStyles.vertical : rootStyles.horizontal,
    state.root.className,
  );

  const rootCssVars = selectionIndicatorRect
    ? {
        [indicatorOffsetVar]: vertical ? `${selectionIndicatorRect.y}px` : `${selectionIndicatorRect.x}px`,
        [indicatorLengthVar]: vertical ? `${selectionIndicatorRect.height}px` : `${selectionIndicatorRect.width}px`,
      }
    : {};

  state.root.style = {
    ...rootCssVars,
    ...state.root.style,
  };

  return state;
};
