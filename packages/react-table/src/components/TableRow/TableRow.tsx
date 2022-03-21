import * as React from 'react';
import { useTableRow } from './useTableRow';
import { useTableRowStyles } from './useTableRowStyles';
import { renderTableRow } from './renderTableRow';
import type { TableRowProps } from './TableRow.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The TableRow component is used to display a row of TableCell's.
 */
export const TableRow: ForwardRefComponent<TableRowProps> = React.forwardRef((props, ref) => {
  const state = useTableRow(props, ref);

  useTableRowStyles(state);

  return renderTableRow(state);
});
TableRow.displayName = 'TableRow';
