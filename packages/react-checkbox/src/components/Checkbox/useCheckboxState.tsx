import * as React from 'react';
import { useControllableState, useEventCallback } from '@fluentui/react-utilities';
import { CheckmarkIcon } from './DefaultIcons';
import type { CheckboxState } from './Checkbox.types';

export const useCheckboxState = (state: CheckboxState) => {
  const { defaultChecked, checked, onChange, size } = state;

  const [internalValue, setInternalValue] = useControllableState({
    defaultState: defaultChecked,
    state: checked,
    initialState: false,
  });

  const setChecked = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>, incomingValue: boolean) => {
      onChange?.(ev, { checked: incomingValue });
      setInternalValue(incomingValue);
    },
    [onChange, setInternalValue],
  );

  const onInputChange = useEventCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.stopPropagation();
    setChecked(ev, ev.currentTarget.checked);
  });

  // Indicator Props
  if (state.indicator) {
    state.indicator.children = internalValue && <CheckmarkIcon size={size!} />;
  }

  // Input Props
  state.input.checked = internalValue;
  state.input.onChange = onInputChange;

  return state;
};
