import * as React from 'react';
import { useControllableState, useEventCallback, useId } from '@fluentui/react-utilities';
import type { InputState } from './Input.types';

export const useInputState = (state: InputState) => {
  const {
    label,
    appearance,
    defaultValue,
    value,
    size,
    danger,
    helperText,
    contentBefore,
    contentAfter,
    disabled,
    onChange,
  } = state;

  const { id } = state.input;
  const labelId = label ? useId('input-label', id) : undefined;
  const helperTextId = helperText ? useId('input-helper-text-', id) : undefined;

  const [currentValue, setCurrentValue] = useControllableState({
    defaultState: defaultValue,
    state: value,
    initialState: '',
  });

  /**
   * Updates the controlled `currentValue` to the new `incomingValue` and clamps it.
   */
  const onInputChange = useEventCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = ev.target.value;
    onChange?.(ev, { value: newValue });
    setCurrentValue(newValue);
  });

  // Root Border Wrapper Props
  state.root.appearance = appearance;
  state.root.danger = danger;
  state.root.disabled = disabled;
  state.root.size = size;
  state.root.contentBefore = contentBefore;
  state.root.contentAfter = contentAfter;
  state.root.currentValue = currentValue;

  if (helperText) {
    state.root.helperText = helperText;
    state.root.helperTextId = helperTextId;
    state.input['aria-describedby'] = helperTextId;
  }

  if (label) {
    state.root.label = label;
    state.root.labelId = labelId;
    state.input.id = labelId;
  }

  // Input Element props
  state.input.value = currentValue;
  state.input.onInput = onInputChange;
  state.input['aria-invalid'] = danger;

  return state;
};
