import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { CardProps, CardState } from './Card.types';
import { useFocusableGroup } from '@fluentui/react-tabster';

export const useCard = (props: CardProps, ref: React.Ref<HTMLElement>): CardState => {
  const { appearance = 'elevate', shape = 'rounded', disabled = false } = props;
  const groupFocusAttributes = useFocusableGroup({ tabBehavior: 'limitedTrapFocus' });

  const state: CardState = {
    appearance,
    shape,
    disabled,
    root: getNativeElementProps(props.as || 'div', {
      ref,
      role: 'group',
      ...groupFocusAttributes,
      ...props,
    }),
    components: {
      root: 'div',
    },
  };

  return state;
};
