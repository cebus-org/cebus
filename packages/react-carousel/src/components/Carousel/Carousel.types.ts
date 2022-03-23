import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import React from 'react';

export type CarouselImage = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export type CarouselSlots = {
  /**
   * The root of the Carousel.
   */
  root: Slot<'div'>;

  /**
   * The tabpanel wrapper around the images.
   */
  tabpanel: NonNullable<Slot<'div'>>;
};

export type CarouselCommons = {
  /**
   * The uncontrolled index of the currently visible page.
   */
  defaultValue?: number;

  /**
   * The controlled index of the currently visible page.
   */
  value?: number;

  /**
   * The callback to call when the Carousel changes.
   */
  onChange?: (ev: React.KeyboardEvent<HTMLElement>, data: { value: number }) => void;
};

export type CarouselProps = Omit<ComponentProps<Partial<CarouselSlots>>, 'children'> & {
  /**
   * Only image elements are allowed within the Carousel.
   */
  children?: CarouselImage[] | CarouselImage;
} & CarouselCommons;

export type CarouselState = ComponentState<CarouselSlots> & CarouselCommons;
