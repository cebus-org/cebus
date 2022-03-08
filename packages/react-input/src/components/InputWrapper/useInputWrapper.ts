import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import type { InputWrapperProps, InputWrapperState } from './InputWrapper.types';
import { useFocusableGroup } from '@fluentui/react-tabster';

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
    currentValue,
  } = props;

  const groupFocusAttributes = useFocusableGroup({ tabBehavior: 'limitedTrapFocus' });

  const state: InputWrapperState = {
    size,
    appearance,
    disabled,
    danger,
    labelId,
    currentValue,
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
      ...groupFocusAttributes,
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

  return state;
};
