import * as React from 'react';
import { useControllableState, useEventCallback, useMergedRefs, useId } from '@fluentui/react-utilities';
import type { TextareaState } from './Textarea.types';

export const useTextareaState = (state: TextareaState) => {
  const {
    label,
    appearance,
    defaultValue,
    value,
    size,
    danger,
    contentBefore,
    contentAfter,
    autoAdjust,
    disabled,
    onChange,
  } = state;

  const { id } = state.root;

  const inputRef = useMergedRefs(state.textarea.ref);
  const labelId = label ? useId('textarea-label', id) : undefined;
  const [currentValue, setCurrentValue] = useControllableState({
    defaultState: defaultValue,
    state: value,
    initialState: '',
  });

  /**
   * Updates the controlled `currentValue` to the new `incomingValue` and clamps it.
   */
  const updateValue = useEventCallback((incomingValue: string, ev: React.ChangeEvent<HTMLTextAreaElement>): void => {
    onChange?.(ev, { value: incomingValue });
    setCurrentValue(incomingValue);
  });

  /**
   * Updates the textarea height to the current scroll height.
   */
  const updateTextareaHeight = React.useCallback(() => {
    inputRef.current!.style.height = '';
    inputRef.current!.style.height = inputRef.current!.scrollHeight + 'px';
  }, [inputRef]);

  const onInputChange = React.useCallback(
    (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
      updateValue(ev.target.value, ev);
      if (autoAdjust) {
        updateTextareaHeight();
      }
    },
    [autoAdjust, updateTextareaHeight, updateValue],
  );

  React.useEffect(() => {
    if (autoAdjust) {
      updateTextareaHeight();
    }
  }, [autoAdjust, updateTextareaHeight]);

  // Root Border Wrapper Props
  state.root.appearance = appearance;
  state.root.danger = danger;
  state.root.disabled = disabled;
  state.root.size = size;
  state.root.contentBefore = contentBefore;
  state.root.contentAfter = contentAfter;
  state.root.currentValue = currentValue;

  if (label) {
    state.root.label = label;
    state.root.labelId = labelId;
    state.textarea.id = labelId;
  }

  state.textarea.value = currentValue;
  // state.textarea.style = textareaStyles;
  state.textarea.onChange = onInputChange;
  state.textarea.disabled = disabled;
  state.textarea.ref = inputRef;

  return state;
};
