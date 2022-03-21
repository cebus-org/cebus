import * as React from 'react';
import { useTable } from './useTable';
import { useTableStyles } from './useTableStyles';
import { renderTable } from './renderTable';
import type { TableProps } from './Table.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Table component displays sets of data.
 */
export const Table: ForwardRefComponent<TableProps> = React.forwardRef((props, ref) => {
  const state = useTable(props, ref);

  useTableStyles(state);

  return renderTable(state);
});
Table.displayName = 'Table';
