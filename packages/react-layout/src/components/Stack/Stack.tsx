import * as React from 'react';
import { useStack } from './useStack';
import { useStackStyles } from './useStackStyles';
import { renderStack } from './renderStack';
import type { StackProps } from './Stack.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Stack helps position and handle padding for a series of components.
 */
export const Stack: ForwardRefComponent<StackProps> = React.forwardRef((props, ref) => {
  const state = useStack(props, ref);

  useStackStyles(state);

  return renderStack(state);
});
Stack.displayName = 'Stack';
