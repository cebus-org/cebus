import * as React from 'react';
import { useCarousel } from './useCarousel';
import { renderCarousel } from './renderCarousel';
import { useCarouselStyles } from './useCarouselStyles';
import type { CarouselProps } from './Carousel.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Carousel component is used to display a collection of images.
 */
export const Carousel: ForwardRefComponent<CarouselProps> = React.forwardRef((props, ref) => {
  const state = useCarousel(props, ref);

  useCarouselStyles(state);

  return renderCarousel(state);
});
Carousel.displayName = 'Carousel';
