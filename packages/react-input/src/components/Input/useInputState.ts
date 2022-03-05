import * as React from 'react';
import { useControllableState, useEventCallback } from '@fluentui/react-utilities';
import type { InputState } from './Input.types';

export const useInputState = (state: InputState) => {
  const { defaultValue, value, type, disabled, required, error, onChange } = state;

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

  state.input.value = currentValue;
  state.input.onChange = onInputChange;
  state.input.type = type;

  return state;
};
