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
    labelId,
    label,
    value,
  } = props;

  const state: InputWrapperState = {
    size,
    appearance,
    disabled,
    danger,
    labelId,
    value,
    helperTextId,
    components: {
      root: 'span',
      contentBefore: 'span',
      contentAfter: 'span',
      border: 'span',
      helperText: 'p',
      label: 'label',
    },
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
    border: resolveShorthand(border, { required: true }),
    helperText: resolveShorthand(helperText),
    contentAfter: resolveShorthand(contentAfter),
    contentBefore: resolveShorthand(contentBefore),
    label: resolveShorthand(label),
  };

  if (state.helperText) {
    state.helperText.id = helperTextId;
  }

  if (state.label) {
    state.label.htmlFor = labelId;
  }

  console.log(state.value);

  return state;
};
