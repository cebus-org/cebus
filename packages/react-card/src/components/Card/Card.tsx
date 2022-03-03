import * as React from 'react';
import { useCard } from './useCard';
import { renderCard } from './renderCard';
import { useCardStyles } from './useCardStyles';
import type { CardProps } from './Card.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Card component displays content and presents actions to the user.
 */
export const Card: ForwardRefComponent<CardProps> = React.forwardRef((props, ref) => {
  const state = useCard(props, ref);

  useCardStyles(state);

  return renderCard(state);
});
Card.displayName = 'Card';
