import * as React from 'react';
import { resolveShorthand, getNativeElementProps, useId } from '@fluentui/react-utilities';
import { Label } from '@cebus/react-label';
import { Body } from '@cebus/react-text';
import type { FormControlProps, FormControlState } from './FormControl.types';

export const useFormControl = (props: FormControlProps, ref: React.Ref<HTMLElement>): FormControlState => {
  const {
    labelComponent,
    helperTextComponent,
    labelStrong,
    size,
    helperText,
    disabled,
    label,
    danger,
    required,
    componentWrapper,
    labelPosition = 'before',
  } = props;

  const state: FormControlState = {
    labelPosition,
    disabled,
    label,
    size,
    labelStrong,
    helperText,
    required,
    danger,
    components: {
      root: 'div',
      labelComponent: Label,
      helperTextComponent: Body,
      componentWrapper: 'div',
    },
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
    labelComponent: resolveShorthand(labelComponent, {
      required: true,
    }),
    helperTextComponent: resolveShorthand(helperTextComponent, {
      required: true,
    }),
    componentWrapper: resolveShorthand(componentWrapper, {
      required: true,
    }),
  };

  const { id } = state.root;

  const helperTextId = helperText ? useId('cebus-helper-text-', id) : undefined;

  if (state.helperTextComponent && state.helperText) {
    state.helperTextComponent.children = state.helperText;
    state.helperTextComponent.color = state.danger ? 'danger' : 'base';
    state.helperTextComponent.id = helperTextId;
    state.helperTextComponent.disabled = disabled;
  }

  if (state.root.children) {
    const mergedProps = React.cloneElement(state.root.children as any, {
      disabled,
      required,
      id: label,
      size: size,
      danger,
      'aria-invalid': danger,
      'aria-describedby': helperTextId,
    });

    state.root.children = mergedProps;
  }

  if (state.labelComponent) {
    state.labelComponent.disabled = disabled;
    state.labelComponent.children = label;
    state.labelComponent.required = required;
    state.labelComponent.htmlFor = label;
    state.labelComponent.strong = labelStrong;
    state.labelComponent.size = size;
  }

  return state;
};
