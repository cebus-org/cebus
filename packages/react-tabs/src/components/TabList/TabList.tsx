import * as React from 'react';
import { useTabList_unstable, renderTabList_unstable } from '@fluentui/react-tabs';
import { useTabListStyles } from './useTabListStyles';
import type { TabListProps } from '@fluentui/react-tabs';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

import { TabListContextValue, TabListContextValues, TabListState } from './TabList.types';

export function useTabListContextValues(state: TabListState): TabListContextValues {
  const { appearance, selectedValue: selectedKey, onRegister, onUnregister, onSelect, size, vertical } = state;

  const tabList: TabListContextValue = {
    appearance,
    selectedValue: selectedKey,
    onSelect,
    onRegister,
    onUnregister,
    size,
    vertical,
  };

  return { tabList };
}

/**
 * A tab list provides single selection from a set of tabs.
 */
export const TabList: ForwardRefComponent<TabListProps> = React.forwardRef((props, ref) => {
  const state = useTabList_unstable(props, ref);
  const contextValues = useTabListContextValues(state);

  useTabListStyles(state);

  return renderTabList_unstable(state, contextValues);
});

TabList.displayName = 'TabList';
