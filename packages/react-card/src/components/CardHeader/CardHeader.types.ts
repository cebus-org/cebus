import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type CardHeaderSlots = {
  /**
   * The root of CardHeader.
   */
  root: Slot<'div'>;

  /**
   * The avatar or image indicator for the Header.
   */
  avatar?: Slot<'div'>;

  /**
   * The text content wrapper for the CardHeader.
   */
  textContainer?: Slot<'div'>;

  /**
   * The header text for the CardHeader.
   */
  header?: Slot<'span'>;

  /**
   * The description for the CardHeader.
   */
  description?: Slot<'span'>;

  /**
   * The action item/s for the CardHeader.
   */
  action?: Slot<'div'>;
};

export type CardHeaderProps = ComponentProps<CardHeaderSlots>;

export type CardHeaderState = ComponentState<CardHeaderSlots>;
