import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { TextProps, TextState } from './Text.types';

export const useText = (props: TextProps, ref: React.Ref<HTMLElement>): TextState => {
  const {
    as = 'span',
    size = 300,
    font = 'base',
    weight = 'regular',
    italic = false,
    underline = false,
    truncate,
    strikethrough = false,
    nowrap = false,
    disabled,
    color = 'base',
    align = 'start',
  } = props;

  const state: TextState = {
    size: size,
    font,
    weight,
    truncate,
    italic,
    disabled,
    underline,
    strikethrough,
    nowrap,
    color,
    align,
    components: {
      root: 'span',
    },
    root: getNativeElementProps(as, {
      ref,
      ...props,
      as,
    }),
  };

  return state;
};
