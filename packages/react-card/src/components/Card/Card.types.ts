import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type CardSlots = {
  /**
   * The root of the Card.
   */
  root: Slot<'div'>;
};

export type CardCommons = {
  /**
   * The appearance of the Card component.
   *
   * - elevated: The Card is elevated through drop shadow.
   * - outlined: The Card contains an outline border.
   *
   * @defaultValue elevate
   */
  appearance?: 'elevate' | 'outline';

  /**
   * The shape of the Card.
   *
   * @defaultValue rounded
   */
  shape?: 'rounded' | 'circular' | 'circle' | 'square';

  /**
   * Whether the intractable Card should be disabled.
   *
   * @defaultValue false
   */
  disabled?: boolean;
};

export interface CardProps extends ComponentProps<CardSlots>, CardCommons {}

export type CardState = ComponentState<CardSlots> & CardCommons;
