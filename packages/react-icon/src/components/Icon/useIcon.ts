import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { IconProps, IconState } from './Icon.types';

export const useIcon = (props: IconProps, ref: React.Ref<HTMLElement>): IconState => {
  const { color, size = 'medium' } = props;

  const spanProps =
    props['aria-label'] || props['aria-labelledby'] || props.title
      ? {
          role: 'img',
        }
      : {
          ['aria-hidden']: true,
        };

  const state: IconState = {
    color,
    size,
    components: {
      root: 'span',
    },
    root: getNativeElementProps('span', {
      ref,
      ...spanProps,
      ...props,
    }),
  };

  return state;
};
