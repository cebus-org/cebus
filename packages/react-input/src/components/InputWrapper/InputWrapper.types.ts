import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type InputWrapperSlots = {
  /**
   * The root of the InputWrapper.
   */
  root: Slot<'span'>;

  /**
   * The border around the inner Input element.
   */
  border: NonNullable<Slot<'span'>>;

  /**
   * The inner nearest content to render within the Input.
   */
  contentBefore?: Slot<'span'>;

  /**
   * The inner furthest content to render within the Input.
   */
  contentAfter?: Slot<'span'>;

  /**
   * The helper text slot rendered below the Input.
   */
  helperText?: Slot<'p'>;

  /**
   * The visible label text for the TextField component.
   */
  label?: Slot<'label'>;
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

  /**
   * The ID used for the helperText element.
   */
  helperTextId?: string;

  /**
   * The ID used for the label element.
   */
  labelId?: string;

  /**
   * The currentValue of the input element. This is used to ensure that the Label transition are correct.
   */
  currentValue?: string;
};

export type InputWrapperProps = ComponentProps<Partial<InputWrapperSlots>> & InputWrapperCommons;

export type InputWrapperState = ComponentState<InputWrapperSlots> & InputWrapperCommons;
