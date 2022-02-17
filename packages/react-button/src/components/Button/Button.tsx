import * as React from 'react';
import { useButton } from './useButton';
import { renderButton } from './renderButton';
import { useButtonStyles } from './useButtonStyles';
import type { ButtonProps } from './Button.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Button allows a user to make an action through a press.
 */
export const Button: ForwardRefComponent<ButtonProps> = React.forwardRef((props, ref) => {
  const state = useButton(props, ref);

  useButtonStyles(state);

  return renderButton(state);
});
Button.displayName = 'Button';
