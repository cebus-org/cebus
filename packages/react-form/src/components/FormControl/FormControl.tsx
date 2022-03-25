import * as React from 'react';
import { useFormControl } from './useFormControl';
import { renderFormControl } from './renderFormControl';
import { useFormControlStyles } from './useFormControlStyles';
import type { FormControlProps } from './FormControl.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The FormControl helps easily set up accessible form controls.
 */
export const FormControl: ForwardRefComponent<FormControlProps> = React.forwardRef((props, ref) => {
  const state = useFormControl(props, ref);

  useFormControlStyles(state);

  return renderFormControl(state);
});
FormControl.displayName = 'FormControl';
