import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type InputWrapperSlots = {
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
};

type InputWrapperCommons = {
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
   * The size of the Input control.
   *
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
};

export type InputWrapperProps = ComponentProps<InputWrapperSlots> & InputWrapperCommons;

export type InputWrapperState = ComponentState<InputWrapperSlots> & InputWrapperCommons;
