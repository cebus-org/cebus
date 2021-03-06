import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import type { InputWrapperProps, InputWrapperState } from './InputWrapper.types';
import { useFocusableGroup } from '@fluentui/react-tabster';

export const useInputWrapper = (props: InputWrapperProps, ref: React.Ref<HTMLElement>): InputWrapperState => {
  const {
    disabled,
    size = 'medium',
    contentAfter,
    contentBefore,
    appearance = 'outline',
    danger,
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
    components: {
      root: 'span',
      contentBefore: 'span',
      contentAfter: 'span',
      label: 'label',
    },
    root: getNativeElementProps('div', {
      ref,
      ...groupFocusAttributes,
      ...props,
    }),
    contentAfter: resolveShorthand(contentAfter),
    contentBefore: resolveShorthand(contentBefore),
    label: resolveShorthand(label),
  };

  if (state.label) {
    state.label.htmlFor = labelId;
  }

  return state;
};
