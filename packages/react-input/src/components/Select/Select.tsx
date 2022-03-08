import * as React from 'react';
import { useSelect } from './useSelect';
import { renderSelect } from './renderSelect';
import { useSelectStyles } from './useSelectStyles';
import type { SelectProps } from './Select.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Select component allows for users to choose an option from a dropdown menu.
 */
export const Select: ForwardRefComponent<SelectProps> = React.forwardRef((props, ref) => {
  const state = useSelect(props, ref);

  useSelectStyles(state);

  return renderSelect(state);
});
Select.displayName = 'Select';
