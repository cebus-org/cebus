import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { StackProps, StackState } from './Stack.types';

export const useStack = (props: StackProps, ref: React.Ref<HTMLElement>): StackState => {
  const {
    vertical = false,
    divider,
    appearance = 'focused',
    horizontalAlignment = 'center',
    verticalAlignment = 'center',
    grow = false,
    inline = false,
    wrap = true,
  } = props;

  const state: StackState = {
    vertical,
    divider,
    appearance,
    inline,
    wrap,
    grow,
    horizontalAlignment,
    verticalAlignment,
    components: {
      root: 'div',
    },
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
  };

  if (divider) {
    const oldChildren: any = state.root.children;
    const newChildren = [];

    if (oldChildren && oldChildren?.length > 1) {
      for (let i = 0; i < oldChildren.length - 1; i++) {
        newChildren.push(oldChildren[i]);
        newChildren.push(divider);
      }
      newChildren.push(oldChildren[oldChildren.length - 1]);
    }
    state.root.children = newChildren;
  }

  return state;
};
