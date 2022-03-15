import * as React from 'react';
import {
  useFluentProviderContextValues_unstable,
  useFluentProvider_unstable,
  renderFluentProvider_unstable,
} from '@fluentui/react-provider';
import { useProviderStyles } from './useProviderStyles';
import type { ProviderProps } from './Provider.types';

/**
 * The Provider control is what applies theme tokens to the web page.
 */
export const Provider = React.forwardRef<HTMLElement, ProviderProps>((props, ref) => {
  const state = useFluentProvider_unstable(props, ref);

  useProviderStyles(state);

  const contextValues = useFluentProviderContextValues_unstable(state);

  return renderFluentProvider_unstable(state, contextValues);
});
Provider.displayName = 'Provider';
