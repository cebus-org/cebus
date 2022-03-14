import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import type { InputWrapperCommons } from '../InputWrapper';
import { InputWrapper } from '../InputWrapper';

export type TextareaSlots = {
  /**
   * The root of the Input. This is the wrapper component that handles it's appearance.
   */
  root: NonNullable<Slot<typeof InputWrapper>>;

  /**
   * The textarea element that handles the functionality of the Textarea.
   */
  textarea: NonNullable<Slot<'textarea'>>;
};

type TextareaCommons = {
  /**
   * The starting value for a uncontrolled Textarea.
   *
   * @defaultValue ''
   */
  defaultValue?: string;

  /**
   * The current value for a controlled Textarea.
   */
  value?: string;

  /**
   * Callback to be called when the value changes.
   */
  onChange?: (
    ev: React.ChangeEvent<HTMLTextAreaElement>,
    data: {
      value: string;
    },
  ) => void;

  /**
   * Whether the Textarea should be able to resize.
   *
   * @default false
   */
  resizable?: boolean;

  /**
   * Whether Textarea should automatically adjust its height based off its content,
   *
   * @default true
   */
  autoAdjust?: boolean;

  /**
   * The content to render before the Textarea.
   */
  contentBefore?: string | number | JSX.Element;

  /**
   * The content to render after the Textarea.
   */
  contentAfter?: string | number | JSX.Element;

  /**
   * The label for the Textarea.
   */
  label?: string;

  /**
   * The placeholder text for the Textarea.
   */
  placeholder?: string;
};

export type TextareaProps = ComponentProps<Partial<TextareaSlots>> & TextareaCommons & InputWrapperCommons;

export type TextareaState = ComponentState<TextareaSlots> & TextareaCommons & InputWrapperCommons;
