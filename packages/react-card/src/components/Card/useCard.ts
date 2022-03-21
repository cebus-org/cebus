import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { CardProps, CardState } from './Card.types';
import { useFocusableGroup } from '@fluentui/react-tabster';

export const useCard = (props: CardProps, ref: React.Ref<HTMLElement>): CardState => {
  const { appearance = 'elevate', inline = false, shape = 'rounded', disabled = false, onClick } = props;
  const groupFocusAttributes = useFocusableGroup({ tabBehavior: 'limitedTrapFocus' });

  const state: CardState = {
    appearance,
    shape,
    disabled,
    inline,
    root: getNativeElementProps(props.as || onClick ? 'button' : 'div', {
      ref,
      role: 'group',
      type: onClick && 'button',
      ...groupFocusAttributes,
      ...props,
    }),
    components: {
      root: onClick ? 'button' : 'div',
    },
  };

  // If the card can be interacted with, forward the callback to the events.
  if (!disabled && onClick) {
    state.root.onClick = (ev: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
      onClick?.(ev);
    };
  }

  return state;
};
