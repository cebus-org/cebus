import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { GridProps, GridState } from './Grid.types';

export const useGrid = (props: GridProps, ref: React.Ref<HTMLElement>): GridState => {
  const {
    appearance = 'focused',
    horizontalAlignment = 'center',
    verticalAlignment = 'center',
    contentSize = '0px',
  } = props;

  const state: GridState = {
    appearance,
    horizontalAlignment,
    verticalAlignment,
    contentSize,
    components: {
      root: 'div',
    },
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
  };

  return state;
};
