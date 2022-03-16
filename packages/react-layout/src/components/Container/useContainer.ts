import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { ContainerProps, ContainerState } from './Container.types';

export const useContainer = (props: ContainerProps, ref: React.Ref<HTMLElement>): ContainerState => {
  const { appearance = 'focused', horizontalAlignment = 'start', verticalAlignment = 'start' } = props;

  const state: ContainerState = {
    appearance,
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

  return state;
};
