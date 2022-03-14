import * as React from 'react';
import { getPartitionedNativeProps, resolveShorthand, useId } from '@fluentui/react-utilities';
import { useCheckboxState } from './useCheckboxState';
import type { CheckboxProps, CheckboxState } from './Checkbox.types';

export const useCheckbox = (props: CheckboxProps, ref: React.Ref<HTMLInputElement>): CheckboxState => {
  const { indicator, defaultChecked = false, onChange, checked, color = 'inherit', size = 'medium' } = props;

  const nativeProps = getPartitionedNativeProps({
    props,
    primarySlotTagName: 'input',
    excludedPropNames: ['checked', 'defaultChecked', 'size', 'onChange'],
  });

  const id = useId('checkbox-', nativeProps.primary.id);

  const state: CheckboxState = {
    checked,
    defaultChecked,
    color,
    size,
    onChange,
    components: {
      root: 'span',
      indicator: 'div',
      input: 'input',
    },
    root: resolveShorthand(props.root, {
      required: true,
      defaultProps: nativeProps.root,
    }),
    indicator: resolveShorthand(indicator, { required: true }),
    input: resolveShorthand(props.input, {
      required: true,
      defaultProps: {
        type: 'checkbox',
        id,
        ref,
        ...nativeProps.primary,
      },
    }),
  };

  useCheckboxState(state);

  return state;
};
