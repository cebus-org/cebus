import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import { useButtonState } from './useToolbarState';
import { useARIAButton } from '@fluentui/react-aria';
import type { ARIAButtonSlotProps } from '@fluentui/react-aria';
import type { ButtonProps, ButtonState } from './Toolbar.types';

export const useButton = (props: ButtonProps, ref: React.Ref<HTMLElement>): ButtonState => {
  const { as, appearance = 'outline', color = 'inherit', disabled = false, size = 'medium', shape = 'rounded' } = props;

  const state: ButtonState = {
    appearance,
    disabled,
    shape,
    size,
    color,
    components: {
      root: 'button',
    },
    root: getNativeElementProps(
      as || 'button',
      useARIAButton<ARIAButtonSlotProps>(props, {
        required: true,
        defaultProps: {
          ref: ref as React.Ref<HTMLButtonElement>,
          type: 'button',
        },
      }),
    ),
  };

  useButtonState(state);

  return state;
};
