import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { TabListState } from '@fluentui/react-tabs';
import { indicatorLengthVar, indicatorOffsetVar } from '@fluentui/react-tabs';
import { tokens } from '@pongo-ui/react-theme';

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    ':after': {
      transitionProperty: 'transform',
      transitionDuration: '.2s',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1) 0m',
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

export const useTabListStyles = (state: TabListState) => {
  const { vertical, selectedTabRect: selectionIndicatorRect } = state;

  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
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
