import * as React from 'react';
import { getNativeElementProps, resolveShorthand, useId } from '@fluentui/react-utilities';
import { useCarouselState } from './useCarouselState';
import type { CarouselProps, CarouselState } from './Carousel.types';

export const useCarousel = (props: CarouselProps, ref: React.Ref<HTMLElement>): CarouselState => {
  const { defaultValue = 0, value, onChange, tabpanel } = props;

  const state: CarouselState = {
    defaultValue,
    value,
    onChange,
    components: {
      root: 'div',
      tabpanel: 'div',
    },
    root: getNativeElementProps('div', {
      ...props,
      ref,
    }),
    tabpanel: resolveShorthand(tabpanel, {
      required: true,
      defaultProps: {
        role: 'tabpanel',
      },
    }),
  };

  useCarouselState(state);

  return state;
};
