import * as React from 'react';
import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type StackSlots = {
  /**
   * The root of the Stack.
   */
  root: Slot<'div'>;
};

export interface StackCommons {
  /**
   * Whether the stack should be rendered vertically.
   *
   * @defaultValue true
   */
  vertical?: boolean;

  /**
   * The divider to render between each child element.
   */
  divider?: React.ReactNode;

  /**
   * The appearance of the Stack.
   * Focused has a lower padding and gap size then relaxed.
   * Relaxed should be used when the content of your app is minimal.
   *
   * @defaultValue focused
   */
  appearance?: 'focused' | 'relaxed';

  /**
   * How the components should be aligned horizontally.
   */
  horizontalAlignment?: 'start' | 'center' | 'end';

  /**
   * How the component should be aligned vertically.
   */
  verticalAlignment?: 'start' | 'center' | 'end';

  /**
   * Whether the content should be inline. This will cause the content to grow based on its children's size rather than parent.
   */
  inline?: boolean;

  /**
   * Whether the content should wrap.
   */
  wrap?: boolean;

  /**
   * Whether the Stack should grow to fit its container.
   */
  grow?: boolean;
}

export type StackProps = ComponentProps<StackSlots> & StackCommons;

export type StackState = ComponentState<StackSlots> & StackCommons;
