import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type GridSlots = {
  /**
   * The root of the Grid.
   */
  root: Slot<'div'>;
};

export interface GridCommons {
  /**
   * The appearance of the Grid.
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
   * The size of each item in the grid.
   */
  contentSize: string;
}

export type GridProps = ComponentProps<GridSlots> & GridCommons;

export type GridState = ComponentState<GridSlots> & GridCommons;
