import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import { useCarouselState } from './useCarouselState';
import { RadioGroup } from '@pongo-ui/react-radio';
import type { CarouselProps, CarouselState } from './Carousel.types';

export const useCarousel = (props: CarouselProps, ref: React.Ref<HTMLElement>): CarouselState => {
  const {
    appearance = 'minimal',
    defaultValue = 0,
    value,
    onChange,
    tabpanel,
    content,
    backArrow,
    forwardArrow,
    radioIndicator,
  } = props;

  const state: CarouselState = {
    defaultValue,
    value,
    onChange,
    content,
    appearance,
    components: {
      root: 'div',
      tabpanel: 'div',
      backArrow: 'button',
      forwardArrow: 'button',
      radioIndicator: RadioGroup,
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
    radioIndicator: resolveShorthand(radioIndicator, {
      required: true,
      defaultProps: { layout: 'horizontal' },
    }),
    backArrow: resolveShorthand(backArrow, {
      required: true,
      defaultProps: {
        type: 'button',
        tabIndex: -1,
      },
    }),
    forwardArrow: resolveShorthand(forwardArrow, {
      required: true,
      defaultProps: {
        type: 'button',
        tabIndex: -1,
      },
    }),
  };

  useCarouselState(state);

  return state;
};
