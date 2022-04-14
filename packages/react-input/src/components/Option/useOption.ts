import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { OptionProps, OptionState } from './Option.types';
import { MenuItemRadio } from '@cebus/react-menu';

export const useOption = (props: OptionProps, ref: React.Ref<HTMLElement>): OptionState => {
  const { value, secondaryContent, icon, checkmark, disabled } = props;

  const state: OptionState = {
    value,
    components: {
      root: MenuItemRadio as any,
    },
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
  };

  state.root.value = value;
  state.root.name = 'select';
  state.root.disabled = disabled;
  state.root.icon = icon;
  state.root.checkmark = checkmark;
  state.root.secondaryContent = secondaryContent;

  return state;
};
