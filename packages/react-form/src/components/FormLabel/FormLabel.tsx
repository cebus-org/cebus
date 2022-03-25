import * as React from 'react';
import { useFormLabel } from './useFormLabel';
import { renderFormLabel } from './renderFormLabel';
import { useFormLabelStyles } from './useFormLabelStyles';
import type { FormLabelProps } from './FormLabel.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The FormLabel helps easily set up accessible labels.
 */
export const FormLabel: ForwardRefComponent<FormLabelProps> = React.forwardRef((props, ref) => {
  const state = useFormLabel(props, ref);

  useFormLabelStyles(state);

  return renderFormLabel(state);
});
FormLabel.displayName = 'FormLabel';
