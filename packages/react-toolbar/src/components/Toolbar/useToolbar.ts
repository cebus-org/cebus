import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { ToolbarProps, ToolbarState } from './Toolbar.types';

export const useToolbar = (props: ToolbarProps, ref: React.Ref<HTMLElement>): ToolbarState => {
  const { contentPadding = true, position = 'sticky', appearance = 'primary' } = props;

  const state: ToolbarState = {
    contentPadding,
    position,
    appearance,
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
