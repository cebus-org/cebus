import * as React from 'react';
import { useChevron } from './useChevron';
import { renderIcon, useIconStyles } from '@pongo-ui/react-icon';
import type { ChevronProps } from './Chevron.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Chevron component provides an animated icon that indicates whether a Menu is open or closed.
 */
export const Chevron: ForwardRefComponent<ChevronProps> = React.forwardRef((props, ref) => {
  const state = useChevron(props, ref);

  useIconStyles(state);

  return renderIcon(state);
});
Chevron.displayName = 'Chevron';
