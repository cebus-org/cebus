import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { IconProps, IconState } from './Icon.types';
import { useIconState } from './useIconState';

export const useIcon = (props: IconProps, ref: React.Ref<SVGSVGElement>): IconState => {
  const { color, disabled, size = 'medium', viewBox = '0 0 2048 2048' } = props;

  const state: IconState = {
    color,
    size,
    viewBox,
    disabled,
    components: {
      root: 'svg',
    },
    root: getNativeElementProps('svg', {
      ...props,
      ref,
    }),
  };

  useIconState(state);

  return state;
};
