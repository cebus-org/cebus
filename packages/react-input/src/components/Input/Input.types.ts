import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type InputSlots = {
  /**
   * The root of the Input.
   */
  root: Slot<'span'>;

  /**
   * The inner nearest content to render within the Input.
   */
  contentBefore?: Slot<'span'>;

  /**
   * The inner furthest content to render within the Input.
   */
  contentAfter?: Slot<'span'>;

  /**
   * Hidden input used to handle the Input's functionality.
   */
  input?: Slot<'input'>;
};

type InputCommons = {
  /**
   * The starting value for a uncontrolled Input. If `true` then the Input will be enabled.
   * Mutually exclusive with `value` prop.
   *
   * @defaultValue ''
   */
  defaultValue?: string;

  /**
   * The current value for a controlled Input. If `true` then the Input will be enabled.
   * Mutually exclusive with `defaultValue` prop.
   */
  value?: string;

  /**
   * The autocomplete hint type for the Input.
   */
  autocomplete?: string;

  /**
   * The label that appears in the Input when no value is set. When a value is set the label will not be visible.
   * Mutually exclusive with `label` prop.
   */
  placeholder?: string;

  /**
   * Whether the Input should be disabled.
   *
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * Whether the Input should be in an error state.
   *
   * @defaultValue false
   */
  error?: boolean;

  /**
   * Whether the Input should be required.
   *
   * @defaultValue false
   */
  required?: boolean;

  /**
   * The appearance variant to use for the Input.
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
   * The size of the Input control.
   *
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * The type of content for the the Input element.
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
