import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import { Label } from '@cebus/react-label';
import { Body } from '@cebus/react-text';

export type FormControlSlots = {
  /**
   * The root of the FormControl.
   */
  root: NonNullable<Slot<'div'>>;

  /**
   * The label component.
   */
  labelComponent?: Slot<typeof Label>;

  /**
   * The helper text to render.
   */
  helperTextComponent?: Slot<typeof Body>;

  /**
   * The wrapper around the component. This is used for positioning.
   */
  componentWrapper: NonNullable<Slot<'div'>>;
};

type FormControlCommons = {
  /**
   * The label to render.
   */
  label?: string;

  /**
   * The helper text to render.
   */
  helperText?: string;

  /**
   * Where the label should be rendered.
   */
  labelPosition?: 'above' | 'after' | 'before';

  /**
   * Whether the label should be rendered with a strong weight.
   */
  labelStrong?: boolean;

  /**
   * Whether the control is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the control is in a danger state.
   */
  danger?: boolean;

  /**
   * Whether the control is required.
   */
  required?: boolean;

  /**
   * The size of the Label
   */
  size?: 'small' | 'medium' | 'large';
};

export type FormControlProps = Partial<ComponentProps<FormControlSlots>> & FormControlCommons;

export type FormControlState = ComponentState<FormControlSlots> & FormControlCommons;
