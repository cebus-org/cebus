import * as React from 'react';
import { useTableHeader } from './useTableHeader';
import { useTableHeaderStyles } from './useTableHeaderStyles';
import { renderTableHeader } from './renderTableHeader';
import type { TableHeaderProps } from './TableHeader.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The TableHeader component is used to display the header content for the Table.
 */
export const TableHeader: ForwardRefComponent<TableHeaderProps> = React.forwardRef((props, ref) => {
  const state = useTableHeader(props, ref);

  useTableHeaderStyles(state);

  return renderTableHeader(state);
});
TableHeader.displayName = 'TableHeader';
