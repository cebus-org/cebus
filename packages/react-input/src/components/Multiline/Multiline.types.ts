import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import type { InputWrapperCommons } from '../InputWrapper';
import { InputWrapper } from '../InputWrapper';

export type MultilineSlots = {
  /**
   * The root of the Input. This is the wrapper component that handles it's appearance.
   */
  root: NonNullable<Slot<typeof InputWrapper>>;

  /**
   * The textarea element that handles the functionality of the Multiline.
   */
  textarea: NonNullable<Slot<'textarea'>>;
};

type MultilineCommons = {
  /**
   * The starting value for a uncontrolled Multiline.
   *
   * @defaultValue ''
   */
  defaultValue?: string;

  /**
   * The current value for a controlled Multiline.
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
   * Whether the Multiline should be able to resize.
   *
   * @default false
   */
  resizable?: boolean;

  /**
   * Whether Multiline should automatically adjust its height based off its content,
   *
   * @default true
   */
  autoAdjust?: boolean;

  /**
   * The content to render before the Multiline.
   */
  contentBefore?: string | number | JSX.Element;

  /**
   * The content to render after the Multiline.
   */
  contentAfter?: string | number | JSX.Element;

  /**
   * The helper text to render below the Multiline.
   */
  helperText?: string;

  /**
   * The label for the Multiline.
   */
  label?: string;

  /**
   * The placeholder text for the Multiline.
   */
  placeholder?: string;
};

export type MultilineProps = ComponentProps<Partial<MultilineSlots>> & MultilineCommons & InputWrapperCommons;

export type MultilineState = ComponentState<MultilineSlots> & MultilineCommons & InputWrapperCommons;
