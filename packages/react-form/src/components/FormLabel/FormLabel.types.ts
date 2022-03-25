import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import { Label } from '@pongo-ui/react-label';

export type FormLabelSlots = {
  /**
   * The root of the FormLabel.
   */
  root: NonNullable<Slot<'div'>>;

  /**
   * The label component.
   */
  labelComponent?: Slot<typeof Label>;
};

type FormLabelCommons = {
  /**
   * The label to render.
   */
  label?: string;

  /**
   * Where the label should be rendered.
   */
  position: 'start' | 'end';

  /**
   * Whether the label should be rendered  vertically
   */
  vertical: boolean;

  /**
   * Whether the control is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the control is required.
   */
  required?: boolean;
};

export type FormLabelProps = ComponentProps<FormLabelSlots> & FormLabelCommons;

export type FormLabelState = ComponentState<FormLabelSlots> & FormLabelCommons;
