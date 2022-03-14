import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import type { InputWrapperCommons } from '../InputWrapper';
import { InputWrapper } from '../InputWrapper';

export type InputSlots = {
  /**
   * The root of the Input. This is the wrapper component that handles it's appearance.
   */
  root: NonNullable<Slot<typeof InputWrapper>>;

  /**
   * The input element. All props are forwarded here rather than the root.
   */
  input: NonNullable<Slot<'input'>>;
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
   * Callback to be called when the value changes.
   */
  onChange?: (
    ev: React.ChangeEvent<HTMLInputElement>,
    data: {
      value: string;
    },
  ) => void;

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

  /**
   * The content to render before the Input element.
   */
  contentBefore?: string | number | JSX.Element;

  /**
   * The content to render after the input element.
   */
  contentAfter?: string | number | JSX.Element;

  /**
   * The label for the Input.
   */
  label?: string;

  /**
   * The placeholder text for the Input.
   */
  placeholder?: string;
};

export type InputProps = Omit<
  ComponentProps<Partial<InputSlots>, 'input'>,
  'children' | 'defaultValue' | 'onChange' | 'size' | 'type' | 'value'
> &
  InputCommons &
  InputWrapperCommons;

export type InputState = ComponentState<InputSlots> & InputCommons & InputWrapperCommons;
