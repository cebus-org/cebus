import * as React from 'react';
import { useIcon } from './useIcon';
import { renderIcon } from './renderIcon';
import { useIconStyles } from './useIconStyles';
import type { IconProps } from './Icon.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Icon control is used to present a visual image that represents a concept for the user.
 */
export const Icon: ForwardRefComponent<IconProps> = React.forwardRef((props, ref) => {
  const state = useIcon(props, ref);

  useIconStyles(state);

  return renderIcon(state);
});
Icon.displayName = 'Icon';
