import * as React from 'react';
import { resolveShorthand, getNativeElementProps } from '@fluentui/react-utilities';
import { useSelectState } from './useSelectState';
import type { SelectProps, SelectState } from './Select.types';
import { InputWrapper } from '../InputWrapper';
import { Menu, MenuPopover, MenuTrigger, MenuList } from '@pongo-ui/react-menu';
import { useFocusableGroup } from '@fluentui/react-tabster';

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
    helperText,
    select,
  } = props;

  const groupFocusAttributes = useFocusableGroup({ tabBehavior: 'limitedTrapFocus' });

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
    helperText,
    label,
    placeholder,
    components: {
      root: InputWrapper,
      select: 'select',
      menu: Menu,
      menuTrigger: MenuTrigger,
      menuPopover: MenuPopover,
      menuList: MenuList,
    },
    root: getNativeElementProps('div', {
      ref,
      ...groupFocusAttributes,
      ...props,
    }),
    select: resolveShorthand(select, { required: true }),
    menu: resolveShorthand(menu, { required: true }),
    menuTrigger: resolveShorthand(menuTrigger, { required: true }),
    menuPopover: resolveShorthand(menuPopover, { required: true }),
    menuList: resolveShorthand(menuList, { required: true }),
  };

  useSelectState(state);

  return state;
};
