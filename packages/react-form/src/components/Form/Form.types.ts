import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type FormSlots = {
  /**
   * The root of the Form.
   */
  root: Slot<'form'>;
};

type FormCommons = {
  /**
   * The appearance of the form
   */
  appearance?: 'focused' | 'relaxed';
};

export type FormProps = ComponentProps<FormSlots> & FormCommons;

export type FormState = ComponentState<FormSlots> & FormCommons;
