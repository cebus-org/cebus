import * as React from 'react';
import { useTableFooter } from './useTableFooter';
import { useTableFooterStyles } from './useTableFooterStyles';
import { renderTableFooter } from './renderTabFooter';
import type { TableFooterProps } from './TableFooter.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The TableFooter component is used to display a footer of data.
 */
export const TableFooter: ForwardRefComponent<TableFooterProps> = React.forwardRef((props, ref) => {
  const state = useTableFooter(props, ref);

  useTableFooterStyles(state);

  return renderTableFooter(state);
});
TableFooter.displayName = 'TableFooter';
