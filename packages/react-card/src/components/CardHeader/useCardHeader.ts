import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import type { CardHeaderProps, CardHeaderState } from './CardHeader.types';

export const useCardHeader = (props: CardHeaderProps, ref: React.Ref<HTMLElement>): CardHeaderState => {
  const { avatar, textContainer, header, description, action } = props;

  const state: CardHeaderState = {
    components: {
      root: 'div',
      avatar: 'div',
      textContainer: 'div',
      header: React.Fragment,
      description: React.Fragment,
      action: 'div',
    },
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
    avatar: resolveShorthand(avatar, {
      required: false,
    }),
    textContainer: resolveShorthand(textContainer || {}),
    header: resolveShorthand(header, {
      required: false,
    }),
    description: resolveShorthand(description, {
      required: false,
    }),
    action: resolveShorthand(action),
  };

  return state;
};
