import * as React from 'react';
import { useLink_unstable } from '@fluentui/react-link';
import { renderLink_unstable } from '@fluentui/react-link';
import { useLinkStyles } from './useLinkStyles';
import type { LinkProps } from '@fluentui/react-link';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Link components creates a standardized anchor element.
 */
export const Link: ForwardRefComponent<LinkProps> = React.forwardRef((props, ref) => {
  const state = useLink_unstable(props, ref);

  useLinkStyles(state);

  return renderLink_unstable(state);
});
Link.displayName = 'Link';
