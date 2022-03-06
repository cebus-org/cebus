import * as React from 'react';
import { useInputWrapper } from './useInputWrapper';
import { renderInputWrapper } from './renderInputWrapper';
import { useInputWrapperStyles } from './useInputWrapperStyles';
import type { InputWrapperProps } from './InputWrapper.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The InputWrapper components sets up the various appearances for the Input related components.
 */
export const InputWrapper: ForwardRefComponent<InputWrapperProps> = React.forwardRef((props, ref) => {
  const state = useInputWrapper(props, ref);

  useInputWrapperStyles(state);

  return renderInputWrapper(state);
});
InputWrapper.displayName = 'InputWrapper';
