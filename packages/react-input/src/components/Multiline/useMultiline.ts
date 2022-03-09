import * as React from 'react';
import { getPartitionedNativeProps, resolveShorthand } from '@fluentui/react-utilities';
import { useMultilineState } from './useMultilineState';
import type { MultilineProps, MultilineState } from './Multiline.types';
import { InputWrapper } from '../InputWrapper';

export const useMultiline = (props: MultilineProps, ref: React.Ref<HTMLTextAreaElement>): MultilineState => {
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
    label,
    placeholder,
    helperText,
  } = props;

  const nativeProps = getPartitionedNativeProps({
    props,
    primarySlotTagName: 'textarea',
    excludedPropNames: ['size', 'onChange', 'value', 'defaultValue'],
  });

  const state: MultilineState = {
    value,
    defaultValue,
    onChange,
    size,
    appearance,
    disabled,
    danger,
    contentBefore,
    contentAfter,
    helperText,
    label,
    placeholder,
    components: {
      root: InputWrapper,
      textarea: 'textarea',
    },
    root: resolveShorthand(props.root, {
      required: true,
      defaultProps: nativeProps.root,
    }),
    textarea: resolveShorthand(props.textarea, {
      required: true,
      defaultProps: {
        ref,
        ...nativeProps.primary,
      },
    }),
  };

  useMultilineState(state);

  return state;
};
