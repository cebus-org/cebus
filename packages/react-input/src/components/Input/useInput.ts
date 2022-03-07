import * as React from 'react';
import { getPartitionedNativeProps, resolveShorthand } from '@fluentui/react-utilities';
import { useInputState } from './useInputState';
import type { InputProps, InputState } from './Input.types';
import { InputWrapper } from '../InputWrapper';

export const useInput = (props: InputProps, ref: React.Ref<HTMLInputElement>): InputState => {
  const {
    value,
    defaultValue,
    onChange,
    appearance = 'outline',
    contentBefore,
    contentAfter,
    size = 'medium',
    disabled,
    danger,
  } = props;

  const nativeProps = getPartitionedNativeProps({
    props,
    primarySlotTagName: 'input',
    excludedPropNames: ['size', 'onChange', 'value', 'defaultValue'],
  });

  const state: InputState = {
    value,
    defaultValue,
    onChange,
    size,
    appearance,
    disabled,
    danger,
    contentBefore,
    contentAfter,
    components: {
      root: InputWrapper,
      input: 'input',
    },
    root: resolveShorthand(props.root, {
      required: true,
      defaultProps: nativeProps.root,
    }),
    input: resolveShorthand(props.input, {
      required: true,
      defaultProps: {
        type: 'text',
        ref,
        ...nativeProps.primary,
      },
    }),
  };

  useInputState(state);

  return state;
};
