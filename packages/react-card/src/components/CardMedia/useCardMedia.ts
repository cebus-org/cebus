import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import type { CardMediaProps, CardMediaState } from './CardMedia.types';

export const useCardMedia = (props: CardMediaProps, ref: React.Ref<HTMLElement>): CardMediaState => {
  const { logo } = props;

  const state: CardMediaState = {
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),

    components: {
      root: 'div',
      logo: 'div',
    },

    logo: resolveShorthand(logo),
  };

  return state;
};
