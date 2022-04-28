import * as React from 'react';
import { useGrid } from './useGrid';
import { useGridStyles } from './useGridStyles';
import { renderGrid } from './renderGrid';
import type { GridProps } from './Grid.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Grid helps handle the positioning of a collection of items.
 */
export const Grid: ForwardRefComponent<GridProps> = React.forwardRef((props, ref) => {
  const state = useGrid(props, ref);

  useGridStyles(state);

  return renderGrid(state);
});
Grid.displayName = 'Grid';
