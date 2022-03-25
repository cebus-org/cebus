import * as React from 'react';
import { useForm } from './useForm';
import { renderForm } from './renderForm';
import { useFormStyles } from './useFormStyles';
import type { FormProps } from './Form.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Form helps easily set up accessible forms.
 */
export const Form: ForwardRefComponent<FormProps> = React.forwardRef((props, ref) => {
  const state = useForm(props, ref);

  useFormStyles(state);

  return renderForm(state);
});
Form.displayName = 'Form';
