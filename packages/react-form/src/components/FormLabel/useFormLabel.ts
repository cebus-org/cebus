import * as React from 'react';
import { resolveShorthand, getNativeElementProps } from '@fluentui/react-utilities';
import { Label } from '@pongo-ui/react-label';
import type { FormLabelProps, FormLabelState } from './FormLabel.types';

export const useFormLabel = (props: FormLabelProps, ref: React.Ref<HTMLElement>): FormLabelState => {
  const { labelComponent, disabled, label, required, position = 'start', vertical = false } = props;

  const state: FormLabelState = {
    position,
    vertical,
    disabled,
    label,
    required,
    components: {
      root: 'div',
      labelComponent: Label,
    },
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
    labelComponent: resolveShorthand(labelComponent, {
      required: true,
    }),
  };

  if (state.labelComponent) {
    state.labelComponent.disabled = disabled;
    state.labelComponent.children = label;
    state.labelComponent.required = required;
  }

  return state;
};
