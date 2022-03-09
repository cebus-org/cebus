import * as React from 'react';
import { useMultiline } from './useMultiline';
import { renderMultiline } from './renderMultiline';
import { useMultilineStyles } from './useMultilineStyles';
import type { MultilineProps } from './Multiline.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 *  The Multiline Text Field allows for users to write and edit text on multiple lines.
 */
export const Multiline: ForwardRefComponent<MultilineProps> = React.forwardRef((props, ref) => {
  const state = useMultiline(props, ref);

  useMultilineStyles(state);

  return renderMultiline(state);
});
Multiline.displayName = 'Multiline';
