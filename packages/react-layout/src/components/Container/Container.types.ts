import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type ContainerSlots = {
  /**
   * The root of the Container.
   */
  root: Slot<'div'>;
};

interface ContainerCommons {
  /**
   * The appearance of the Container.
   * Focused has a lower padding and gap size then relaxed.
   * Relaxed should be used when the content of your app is minimal.
   *
   * @defaultValue focused
   */
  appearance?: 'focused' | 'relaxed';

  /**
   * How the content should be aligned horizontally.
   */
  horizontalAlignment?: 'start' | 'center' | 'end';

  /**
   * How the content should be aligned vertically.
   */
  verticalAlignment?: 'start' | 'center' | 'end';
}

export type ContainerProps = ComponentProps<ContainerSlots> & ContainerCommons;

export type ContainerState = ComponentState<ContainerSlots> & ContainerCommons;
