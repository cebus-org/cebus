import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import React from 'react';

export type CardSlots = {
  /**
   * The root of the Card.
   */
  root: Slot<'div', 'button'>;
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

  /**
   * Whether the Card should be rendered inline.
   *
   * @defaultValue false
   */
  inline?: boolean;

  /**
   * Change event to call when the user interacts with the card (press or keyboard).
   * This is used for intractable Card content.
   */
  onClick?: (ev: React.MouseEvent | React.KeyboardEvent) => void;
};

export interface CardProps extends Omit<ComponentProps<CardSlots>, 'onClick'>, CardCommons {}

export type CardState = ComponentState<CardSlots> & CardCommons;
