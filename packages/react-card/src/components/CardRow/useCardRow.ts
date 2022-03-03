import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { CardRowProps, CardRowState } from './CardRow.types';

export const useCardRow = (props: CardRowProps, ref: React.Ref<HTMLElement>): CardRowState => {
  const state: CardRowState = {
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
    components: {
      root: 'div',
    },
  };

  return state;
};
