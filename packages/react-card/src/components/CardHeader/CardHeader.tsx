import * as React from 'react';
import { useCardHeader } from './useCardHeader';
import { renderCardHeader } from './renderCardHeader';
import { useCardHeaderStyles } from './useCardHeaderStyles';
import type { CardHeaderProps } from './CardHeader.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The CardHeader provides information about the Card components use.
 */
export const CardHeader: ForwardRefComponent<CardHeaderProps> = React.forwardRef((props, ref) => {
  const state = useCardHeader(props, ref);

  useCardHeaderStyles(state);

  return renderCardHeader(state);
});
CardHeader.displayName = 'CardHeader';
