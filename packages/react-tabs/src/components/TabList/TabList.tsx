import * as React from 'react';
import { useTabList_unstable, renderTabList_unstable } from '@fluentui/react-tabs';
import { useTabListStyles } from './useTabListStyles';
import type { TabListContextValue, TabListContextValues } from '@fluentui/react-tabs';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { TabListProps, TabListState } from './TabList.types';

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
  const state = useTabList_unstable({ ...props }, ref);
  const contextValues = useTabListContextValues(state);
  const { rail = true } = props;
  const mergedState = { rail, ...state };

  useTabListStyles(mergedState);

  return renderTabList_unstable(mergedState, contextValues);
});

TabList.displayName = 'TabList';
