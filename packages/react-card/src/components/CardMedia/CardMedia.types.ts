import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type CardMediaSlots = {
  /**
   * The root of CardMedia.
   */
  root: Slot<'div'>;

  /**
   * The logo for the media content.
   */
  logo?: Slot<'div'>;
};

export interface CardMediaProps extends ComponentProps<CardMediaSlots> {}

export type CardMediaState = ComponentState<CardMediaSlots>;
