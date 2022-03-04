import * as React from 'react';
import { renderDivider_unstable } from '@fluentui/react-divider';
import { useDivider } from './useDivider';
import { useDividerStyles } from './useDividerStyles';
import type { DividerProps } from './Divider.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Divider helps separate content in a site.
 */
export const Divider: ForwardRefComponent<DividerProps> = React.forwardRef((props, ref) => {
  const state = useDivider(props, ref);

  useDividerStyles(state);

  return renderDivider_unstable(state);
});
Divider.displayName = 'Divider';
