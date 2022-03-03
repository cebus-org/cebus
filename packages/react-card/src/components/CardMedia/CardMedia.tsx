import * as React from 'react';
import { useCardMedia } from './useCardMedia';
import { renderCardMedia } from './renderCardMedia';
import { useCardMediaStyles } from './useCardMediaStyles';
import type { CardMediaProps } from './CardMedia.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The CardMedia component adds media (image or video) related content to the Card.
 */
export const CardMedia: ForwardRefComponent<CardMediaProps> = React.forwardRef((props, ref) => {
  const state = useCardMedia(props, ref);

  useCardMediaStyles(state);

  return renderCardMedia(state);
});
CardMedia.displayName = 'CardMedia';
