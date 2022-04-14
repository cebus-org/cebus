import * as React from 'react';
import { resolveShorthand, getNativeElementProps } from '@fluentui/react-utilities';
import { useSelectState } from './useSelectState';
import type { SelectProps, SelectState } from './Select.types';
import { InputWrapper } from '../InputWrapper';
import { Menu, MenuPopover, MenuTrigger, MenuList } from '@cebus/react-menu';

export const useSelect = (props: SelectProps, ref: React.Ref<HTMLInputElement>): SelectState => {
  const {
    value,
    defaultValue,
    onCheckedValueChange,
    appearance = 'outline',
    contentBefore,
    contentAfter,
    size = 'medium',
    disabled,
    danger,
    label,
    placeholder,
    menu,
    menuTrigger,
    menuPopover,
    menuList,
    selectValue,
  } = props;

  const state: SelectState = {
    value,
    defaultValue,
    onCheckedValueChange,
    size,
    appearance,
    disabled,
    danger,
    contentBefore,
    contentAfter,
    label,
    placeholder,
    components: {
      root: InputWrapper,
      menu: Menu,
      menuTrigger: MenuTrigger,
      menuPopover: MenuPopover,
      menuList: MenuList,
      selectValue: 'div',
    },
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
    menu: resolveShorthand(menu, { required: true }),
    menuTrigger: resolveShorthand(menuTrigger, { required: true }),
    menuPopover: resolveShorthand(menuPopover, { required: true }),
    menuList: resolveShorthand(menuList, { required: true }),
    selectValue: resolveShorthand(selectValue, {
      required: true,
      defaultProps: {
        role: 'button',
        'aria-haspopup': 'menu',
      },
    }),
  };

  useSelectState(state);

  return state;
};
