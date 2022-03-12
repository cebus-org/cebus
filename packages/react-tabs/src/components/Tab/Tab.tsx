import * as React from 'react';
import { useTab_unstable } from '@fluentui/react-tabs';
import { renderTab_unstable } from '@fluentui/react-tabs';
import { useTabStyles } from './useTabStyles';
import type { TabProps } from '@fluentui/react-tabs';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * A tab provides a selectable item in a tab list.
 */
export const Tab: ForwardRefComponent<TabProps> = React.forwardRef((props, ref) => {
  const state = useTab_unstable(props, ref);

  useTabStyles(state);
  return renderTab_unstable(state);
});
Tab.displayName = 'Tab';
