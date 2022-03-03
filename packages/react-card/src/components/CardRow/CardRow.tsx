import * as React from 'react';
import { useCardRow } from './useCardRow';
import { renderCardRow } from './renderCardRow';
import { useCardRowStyles } from './useCardRowStyles';
import type { CardRowProps } from './CardRow.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The CardRow component wraps items within a card and positions them.
 */
export const CardRow: ForwardRefComponent<CardRowProps> = React.forwardRef((props, ref) => {
  const state = useCardRow(props, ref);

  useCardRowStyles(state);

  return renderCardRow(state);
});
CardRow.displayName = 'CardRow';
