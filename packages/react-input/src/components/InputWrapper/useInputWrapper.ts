import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import { useInputWrapperState } from './useInputWrapperState';
import type { InputWrapperProps, InputWrapperState } from './InputWrapper.types';

export const useInputWrapper = (props: InputWrapperProps, ref: React.Ref<HTMLElement>): InputWrapperState => {
  const { disabled, size = 'medium', appearance = 'outline' } = props;

  const state: InputWrapperState = {
    size,
    appearance,
    disabled,

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

  useInputWrapperState(state);

  return state;
};
