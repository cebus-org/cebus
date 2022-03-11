import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { ToolbarProps, ToolbarState } from './Toolbar.types';

export const useToolbar = (props: ToolbarProps, ref: React.Ref<HTMLElement>): ToolbarState => {
  const { contentPadding = true } = props;

  const state: ToolbarState = {
    contentPadding,
    components: {
      root: 'header',
    },
    root: getNativeElementProps('header', {
      ref,
      role: 'banner',
      ...props,
    }),
  };

  return state;
};
