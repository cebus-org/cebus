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

export type InputWrapperCommons = {
  /**
   * Whether the Input should be disabled.
   *
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * Whether the Input should be in a danger state.
   *
   * @defaultValue false
   */
  danger?: boolean;

  /**
   * The appearance variant to use for the Input.
   *
   * @defaultValue outline
   */
  appearance?: 'outline' | 'standard' | 'filled';

  /**
   * The size of the Input control.
   *
   * @defaultValue medium
   */
  size?: 'small' | 'medium' | 'large';
};

export type InputWrapperProps = ComponentProps<InputWrapperSlots> & InputWrapperCommons;

export type InputWrapperState = ComponentState<InputWrapperSlots> & InputWrapperCommons;
