import * as React from 'react';
import { useTableCell } from './useTableCell';
import { useTableCellStyles } from './useTableCellStyles';
import { renderTableCell } from './renderTableCell';
import type { TableCellProps } from './TableCell.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The TableCell component is used to display a cell of data.
 */
export const TableCell: ForwardRefComponent<TableCellProps> = React.forwardRef((props, ref) => {
  const state = useTableCell(props, ref);

  useTableCellStyles(state);

  return renderTableCell(state);
});
TableCell.displayName = 'TableCell';
