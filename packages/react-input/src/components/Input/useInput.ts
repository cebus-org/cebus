import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import { useInputState } from './useInputState';
import type { InputProps, InputState } from './Input.types';

export const useInput = (props: InputProps, ref: React.Ref<HTMLElement>): InputState => {
  const { defaultValue, placeholder, disabled, type, value, size = 'medium', appearance = 'outline' } = props;

  const state: InputState = {
    defaultValue,
    value,
    size,
    appearance,
    disabled,
    placeholder,
    type,
    components: {
      root: 'span',
      input: 'input',
      contentBefore: 'span',
      contentAfter: 'span',
    },
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
    input: resolveShorthand(props.input, {
      required: true,
      defaultProps: {
        type: 'text',
      },
    }),
    contentAfter: resolveShorthand(props.contentAfter),
    contentBefore: resolveShorthand(props.contentBefore),
  };

  useInputState(state);

  return state;
};
