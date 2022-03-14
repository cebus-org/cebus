import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type CheckboxSlots = {
  /**
   * The root of the Checkbox.
   */
  root: NonNullable<Slot<'span'>>;

  /**
   * Hidden input used to handle the Checkbox's functionality.
   */
  input: NonNullable<Slot<'input'>>;

  /**
   * The indicator for the checkbox.
   */
  indicator: Slot<'div'>;
};

export type CheckboxCommons = {
  /**
   * The starting value for a uncontrolled Checkbox. If `true` then the Checkbox will be enabled.
   * Mutually exclusive with `checked` prop.
   *
   * @defaultValue false
   */
  defaultChecked?: boolean;

  /**
   * The current value for a controlled Checkbox. If `true` then the Checkbox will be enabled.
   * Mutually exclusive with `defaultChecked` prop.
   */
  checked?: boolean;

  /**
   * The color of the Checkbox.
   *
   * @defaultValue inherit
   */
  color?: 'inherit' | 'brand' | 'secondary' | 'success' | 'danger' | 'social' | 'warning' | 'info';

  /**
   * The size of the Checkbox.
   *
   * * Medium - `20px`
   * * Large - `24px`
   *
   * *Note that this only changes the visible size of the indicator and not the touch target size of 34px*
   *
   * @defaultValue medium
   */
  size?: 'medium' | 'large';

  /**
   * Callback to be called when the `checked` value changes.
   */
  onChange?: (
    ev: React.FormEvent<HTMLInputElement>,
    data: {
      checked: boolean;
    },
  ) => void;
};

export type CheckboxProps = Omit<ComponentProps<Partial<CheckboxSlots>, 'input'>, 'size'> &
  Partial<CheckboxCommons> & {
    /**
     * The Checkbox component does not support children.
     */
    children?: never;
  };

export type CheckboxState = ComponentState<CheckboxSlots> & CheckboxCommons;
