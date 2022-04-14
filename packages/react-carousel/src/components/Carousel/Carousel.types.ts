import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import type { RadioGroup } from '@cebus/react-radio';
import React from 'react';

export type CarouselImage = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export type CarouselChange = React.MouseEvent<HTMLElement> | React.FormEvent<HTMLDivElement>;

export type CarouselSlots = {
  /**
   * The root of the Carousel.
   */
  root: Slot<'div'>;

  /**
   * The tabpanel wrapper around the images.
   */
  tabpanel: NonNullable<Slot<'div'>>;

  /**
   * The back button for the Carousel
   */
  backArrow?: Slot<'button'>;

  /**
   * The forward button for the Carousel
   */
  forwardArrow?: Slot<'button'>;

  /**
   * The wrapper for the radio button indicators in the minimal appearance.
   */
  radioIndicator?: Slot<typeof RadioGroup>;
};

type CarouselCommons = {
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
  onChange?: (ev: CarouselChange, data: { value: number }) => void;

  /**
   * The appearance of the Carousel.
   *
   * * minimal: Arrows are shown to the left and right of the image and a bar indicator shows the position.
   * * gallery: No arrows are visible and the user is shown their location by a paginated set of small images.
   */
  appearance?: 'minimal' | 'gallery';

  /**
   * The content to render within the Carousel
   */
  content: {
    /**
     * The image source to load.
     */
    src: string;

    /**
     * The alt text to be read by the screen reader
     */
    alt: string;
  }[];
};

export type CarouselProps = Omit<ComponentProps<Partial<CarouselSlots>>, 'children'> & {
  /**
   * Add images through the content prop
   */
  children?: never;
} & CarouselCommons;

export type CarouselState = ComponentState<CarouselSlots> & CarouselCommons;
