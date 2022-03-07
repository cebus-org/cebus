import * as React from 'react';
import { useControllableState, useEventCallback, useId } from '@fluentui/react-utilities';
import type { InputState } from './Input.types';

export const useInputState = (state: InputState) => {
  const { appearance, defaultValue, value, size, danger, helperText, contentBefore, contentAfter, disabled, onChange } =
    state;

  const { id } = state.input;
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

  if (helperText) {
    state.root.helperText = helperText;
    state.root.helperTextId = helperTextId;
    state.input['aria-describedby'] = helperTextId;
  }

  // Input Element props
  state.input.value = currentValue;
  state.input.onChange = onInputChange;
  state.input['aria-invalid'] = danger;

  return state;
};
