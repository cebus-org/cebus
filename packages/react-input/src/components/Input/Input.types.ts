import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type InputSlots = {
  /**
   * The root of the TextField.
   */
  root: Slot<'span'>;

  /**
   * The inner nearest content to render within the TextField.
   */
  contentBefore?: Slot<'span'>;

  /**
   * The inner furthest content to render within the TextField.
   */
  contentAfter?: Slot<'span'>;

  /**
   * Hidden input used to handle the TextField's functionality.
   */
  input: Slot<'input'>;
};

type InputCommons = {
  /**
   * The starting value for a uncontrolled TextField. If `true` then the TextField will be enabled.
   * Mutually exclusive with `value` prop.
   *
   * @defaultValue ''
   */
  defaultValue?: string;

  /**
   * The current value for a controlled TextField. If `true` then the TextField will be enabled.
   * Mutually exclusive with `defaultValue` prop.
   */
  value?: string;

  /**
   * The autocomplete hint type for the TextField.
   */
  autocomplete?: string;

  /**
   * The label that appears in the TextField when no value is set. When a value is set the label will not be visible.
   * Mutually exclusive with `label` prop.
   */
  placeholder?: string;

  /**
   * Whether the TextField should be disabled.
   *
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * Whether the TextField should be in an error state.
   *
   * @defaultValue false
   */
  error?: boolean;

  /**
   * Whether the TextField should be required.
   *
   * @defaultValue false
   */
  required?: boolean;

  /**
   * The appearance variant to use for the TextField.
   *
   * @defaultValue outline
   */
  appearance?: 'outline' | 'standard' | 'filled';

  /**
   * Callback to be called when the value changes.
   */
  onChange?: (
    ev: React.ChangeEvent<HTMLInputElement>,
    data: {
      value: string;
    },
  ) => void;

  /**
   * The size of the TextField control.
   *
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * The type of content for the the input element.
   */
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'search'
    | 'tel'
    | 'url'
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'number'
    | 'time'
    | 'week';
};

export type InputProps = ComponentProps<InputSlots> & InputCommons;

export type InputState = ComponentState<InputSlots> & InputCommons;
