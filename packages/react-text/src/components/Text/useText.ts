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
    strikethrough = false,
    color = 'base',
  } = props;

  const state: TextState = {
    size: size,
    font,
    weight,
    italic,
    underline,
    strikethrough,
    color,
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
