import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import { useToolbarState } from './useToolbarState';
import type { ToolbarProps, ToolbarState } from './Toolbar.types';
import { useFocusableGroup } from '@fluentui/react-tabster';

export const useToolbar = (props: ToolbarProps, ref: React.Ref<HTMLElement>): ToolbarState => {
  const {} = props;
  const groupFocusAttributes = useFocusableGroup({ tabBehavior: 'limitedTrapFocus' });

  const state: ToolbarState = {
    components: {
      root: 'header',
    },
    root: getNativeElementProps('header', {
      ref,
      role: 'group',
      ...groupFocusAttributes,
      ...props,
    }),
  };

  useToolbarState(state);

  return state;
};
