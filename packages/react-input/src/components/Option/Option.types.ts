import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import { MenuItem, MenuItemRadio } from '@pongo-ui/react-menu';

export type OptionSlots = {
  /**
   * The root of the Option.
   */
  root: Slot<typeof MenuItem & typeof MenuItemRadio>;
};

export type OptionCommons = {
  /**
   * The value of the option.
   */
  value: string;

  /**
   * Applies disabled styles to menu item but remains focusable
   */
  disabled?: boolean;
};

export type OptionProps = Omit<ComponentProps<OptionSlots>, 'name'> & OptionCommons;

export type OptionState = Omit<ComponentState<OptionSlots>, 'name'> & OptionCommons;
