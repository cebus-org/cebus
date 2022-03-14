import * as React from 'react';
import { useCheckbox } from './useCheckbox';
import { renderCheckbox } from './renderCheckbox';
import { useCheckboxStyles } from './useCheckboxStyles';
import type { CheckboxProps } from './Checkbox.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Checkbox allows users to toggle a value between an on and off state.
 */
export const Checkbox: ForwardRefComponent<CheckboxProps> = React.forwardRef((props, ref) => {
  const state = useCheckbox(props, ref);

  useCheckboxStyles(state);

  return renderCheckbox(state);
});
Checkbox.displayName = 'Checkbox';
