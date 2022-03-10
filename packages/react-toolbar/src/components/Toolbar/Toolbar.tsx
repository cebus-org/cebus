import * as React from 'react';
import { useButton } from './useToolbar';
import { renderButton } from './renderToolbar';
import { useButtonStyles } from './useToolbarStyles';
import type { ButtonProps } from './Toolbar.types';
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
