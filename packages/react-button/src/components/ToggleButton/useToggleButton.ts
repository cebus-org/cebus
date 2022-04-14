import * as React from 'react';
import { useControllableState } from '@fluentui/react-utilities';
import { useButton } from '../Button/useButton';
import type { ToggleButtonProps, ToggleButtonState } from './ToggleButton.types';

export const useToggleButton = (
  { checked, defaultChecked, ...props }: ToggleButtonProps,
  ref: React.Ref<HTMLButtonElement | HTMLAnchorElement>,
): ToggleButtonState => {
  const buttonState = useButton(props, ref);
  const { disabled } = props;
  const { role, onClick: onClickCallback } = buttonState.root;

  const [checkedValue, setCheckedValue] = useControllableState({
    state: checked,
    defaultState: defaultChecked,
    initialState: false,
  });

  const isCheckboxTypeRole = role === 'menuitemcheckbox' || role === 'checkbox';

  /**
   * Callback for when the ToggleButton is pressed
   */
  const onClick = React.useCallback(
    (ev: React.MouseEvent<HTMLButtonElement> & React.MouseEvent<HTMLAnchorElement>) => {
      if (!disabled) {
        // The user's onClick callback should be called.
        onClickCallback?.(ev);

        if (!ev.defaultPrevented) {
          setCheckedValue(!checkedValue);
        }
      }
    },
    [checkedValue, disabled, setCheckedValue, onClickCallback],
  );

  return {
    ...buttonState,
    checked: checkedValue,
    root: {
      ...buttonState.root,
      [isCheckboxTypeRole ? 'aria-checked' : 'aria-pressed']: checkedValue,
      onClick: onClick,
    },
  };
};
