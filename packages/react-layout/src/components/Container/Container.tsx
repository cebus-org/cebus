import * as React from 'react';
import { useContainer } from './useContainer';
import { useContainerStyles } from './useContainerStyles';
import { renderContainer } from './renderContainer';
import type { ContainerProps } from './Container.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Container helps position and handle padding for an application's layout.
 */
export const Container: ForwardRefComponent<ContainerProps> = React.forwardRef((props, ref) => {
  const state = useContainer(props, ref);

  useContainerStyles(state);

  return renderContainer(state);
});
Container.displayName = 'Container';
