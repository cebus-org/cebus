import * as React from 'react';
import { getPartitionedNativeProps, resolveShorthand } from '@fluentui/react-utilities';
import { useTextareaState } from './useTextareaState';
import type { TextareaProps, TextareaState } from './Textarea.types';
import { InputWrapper } from '../InputWrapper';

export const useTextarea = (props: TextareaProps, ref: React.Ref<HTMLTextAreaElement>): TextareaState => {
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
    autoAdjust = true,
    resizable = false,
    placeholder,
    helperText,
  } = props;

  const nativeProps = getPartitionedNativeProps({
    props,
    primarySlotTagName: 'textarea',
    excludedPropNames: ['size', 'onChange', 'value', 'defaultValue'],
  });

  const state: TextareaState = {
    value,
    defaultValue,
    onChange,
    size,
    appearance,
    disabled,
    danger,
    contentBefore,
    resizable,
    autoAdjust,
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

  useTextareaState(state);

  return state;
};
