import * as React from 'react';
import { useTableBody } from './useTableBody';
import { useTableBodyStyles } from './useTableBodyStyles';
import { renderTableBody } from './renderTableBody';
import type { TableBodyProps } from './TableBody.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The TableBody component is used to display the main collection of data.
 */
export const TableBody: ForwardRefComponent<TableBodyProps> = React.forwardRef((props, ref) => {
  const state = useTableBody(props, ref);

  useTableBodyStyles(state);

  return renderTableBody(state);
});
TableBody.displayName = 'TableBody';
