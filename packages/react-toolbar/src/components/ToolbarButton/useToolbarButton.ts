import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { ToolbarButtonProps, ToolbarButtonState } from './ToolbarButton.types';
import { useToolbarContext } from '../../contexts/toolbarContext';
import { useARIAButton } from '@fluentui/react-aria';
import type { ARIAButtonSlotProps } from '@fluentui/react-aria';

export const useToolbarButton = (props: ToolbarButtonProps, ref: React.Ref<HTMLElement>): ToolbarButtonState => {
  const { as, disabled } = props;
  const appearance = useToolbarContext(context => context.appearance);

  const state: ToolbarButtonState = {
    disabled,
    appearance,
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

  return state;
};
