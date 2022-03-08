import * as React from 'react';
import { getPartitionedNativeProps, resolveShorthand } from '@fluentui/react-utilities';
import { useSelectState } from './useSelectState';
import type { SelectProps, SelectState } from './Select.types';
import { InputWrapper } from '../InputWrapper';
import { Menu, MenuPopover, MenuTrigger, MenuList } from '@pongo-ui/react-menu';

export const useSelect = (props: SelectProps, ref: React.Ref<HTMLInputElement>): SelectState => {
  const {
    value,
    defaultValue,
    onChange,
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
  } = props;

  const nativeProps = getPartitionedNativeProps({
    props,
    primarySlotTagName: 'input',
    excludedPropNames: ['size', 'onChange', 'value', 'defaultValue'],
  });

  const state: SelectState = {
    value,
    defaultValue,
    onChange,
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
      input: 'input',
      menu: Menu,
      menuTrigger: MenuTrigger,
      menuPopover: MenuPopover,
      menuList: MenuList,
    },
    root: resolveShorthand(props.root, {
      required: true,
      defaultProps: nativeProps.root,
    }),
    input: resolveShorthand(props.input, {
      required: true,
      defaultProps: {
        type: 'text',
        ref,
        ...nativeProps.primary,
      },
    }),

    menu: resolveShorthand(menu, { required: true }),
    menuTrigger: resolveShorthand(menuTrigger, { required: true }),
    menuPopover: resolveShorthand(menuPopover, { required: true }),
    menuList: resolveShorthand(menuList, { required: true }),
  };

  useSelectState(state);

  return state;
};
