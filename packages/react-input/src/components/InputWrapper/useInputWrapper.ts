import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import type { InputWrapperProps, InputWrapperState } from './InputWrapper.types';

export const useInputWrapper = (props: InputWrapperProps, ref: React.Ref<HTMLElement>): InputWrapperState => {
  const {
    disabled,
    size = 'medium',
    helperText,
    contentAfter,
    contentBefore,
    border,
    appearance = 'outline',
    danger,
    helperTextId,
  } = props;

  const state: InputWrapperState = {
    size,
    appearance,
    disabled,
    danger,
    helperTextId,
    components: {
      root: 'span',
      contentBefore: 'span',
      contentAfter: 'span',
      border: 'span',
      helperText: 'p',
    },
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
    border: resolveShorthand(border, { required: true }),
    helperText: resolveShorthand(helperText),
    contentAfter: resolveShorthand(contentAfter),
    contentBefore: resolveShorthand(contentBefore),
  };

  if (state.helperText) {
    state.helperText.id = helperTextId;
  }

  return state;
};
