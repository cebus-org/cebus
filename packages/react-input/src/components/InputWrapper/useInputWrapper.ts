import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import type { InputWrapperProps, InputWrapperState } from './InputWrapper.types';

export const useInputWrapper = (props: InputWrapperProps, ref: React.Ref<HTMLElement>): InputWrapperState => {
  const { disabled, size = 'medium', appearance = 'outline', danger } = props;

  const state: InputWrapperState = {
    size,
    appearance,
    disabled,
    danger,
    components: {
      root: 'span',
      contentBefore: 'span',
      contentAfter: 'span',
    },
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
    contentAfter: resolveShorthand(props.contentAfter),
    contentBefore: resolveShorthand(props.contentBefore),
  };

  return state;
};
