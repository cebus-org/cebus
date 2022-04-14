import * as React from 'react';
import { Chevron, Menu, MenuTrigger, MenuList, MenuPopover, MenuItem, MenuItemRadio, MenuItemCheckbox } from '../index';
import type { MenuProps } from '../index';
import { Button } from '@cebus/react-button';

export const BasicMenuExample = () => {
  const [open, setOpen] = React.useState(false);
  const onOpenChange: MenuProps['onOpenChange'] = (e, data) => {
    setOpen(data.open);
  };

  return (
    <Menu open={open} onOpenChange={onOpenChange} inline={false}>
      <MenuTrigger>
        <Button>Open Menu</Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItem>Cut</MenuItem>
          <MenuItem disabled>Edit</MenuItem>
          <MenuItem secondaryContent="Ctrl + V">Paste</MenuItem>
          <MenuItem>Save</MenuItem>
          <MenuItem>Save as</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

const PreferencesSubMenu = () => {
  const [open, setOpen] = React.useState(false);
  const onOpenChange: MenuProps['onOpenChange'] = (e, data) => {
    setOpen(data.open);
  };

  return (
    <Menu open={open} onOpenChange={onOpenChange}>
      <MenuTrigger>
        <MenuItem>Preferences</MenuItem>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Online Services Settings</MenuItem>
          <MenuItem>Extensions</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export const MenuNestedExample = () => {
  const [open, setOpen] = React.useState(true);
  const onOpenChange: MenuProps['onOpenChange'] = (e, data) => {
    setOpen(data.open);
  };

  return (
    <Menu open={open} onOpenChange={onOpenChange}>
      <MenuTrigger>
        <MenuItem>Appearance</MenuItem>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>Centered Layout</MenuItem>
          <MenuItem>Zen</MenuItem>
          <MenuItem disabled>Zoom In</MenuItem>
          <MenuItem>Zoom Out</MenuItem>
          <PreferencesSubMenu />
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export const ControlledRadioItems = () => {
  const [checkedValues, setCheckedValues] = React.useState<Record<string, string[]>>({
    font: ['segoe'],
  });

  const onChange: MenuProps['onCheckedValueChange'] = (ev, { name, checkedItems }) => {
    setCheckedValues({ [name]: checkedItems });
  };

  return (
    <Menu>
      <MenuTrigger>
        <Button>Toggle menu</Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList checkedValues={checkedValues} onCheckedValueChange={onChange}>
          <MenuItemRadio name="font" value="segoe">
            Segoe
          </MenuItemRadio>
          <MenuItemRadio name="font" value="calibri">
            Calibri
          </MenuItemRadio>
          <MenuItemRadio name="font" value="arial">
            Arial
          </MenuItemRadio>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export const ControlledCheckboxItems = () => {
  const [checkedValues, setCheckedValues] = React.useState<Record<string, string[]>>({
    font: ['segoe'],
  });

  const onChange: MenuProps['onCheckedValueChange'] = (ev, { name, checkedItems }) => {
    setCheckedValues({ [name]: checkedItems });
  };

  return (
    <Menu>
      <MenuTrigger>
        <Button>Toggle menu</Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList checkedValues={checkedValues} onCheckedValueChange={onChange}>
          <MenuItemCheckbox name="font" value="segoe">
            Segoe
          </MenuItemCheckbox>
          <MenuItemCheckbox name="font" value="calibri">
            Calibri
          </MenuItemCheckbox>
          <MenuItemCheckbox name="font" value="arial">
            Arial
          </MenuItemCheckbox>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export const ChevronExample = () => {
  const [open, setOpen] = React.useState(false);
  const onOpenChange: MenuProps['onOpenChange'] = (e, data) => {
    setOpen(data.open);
  };

  return (
    <Menu open={open} onOpenChange={onOpenChange} inline={false}>
      <MenuTrigger>
        <Button>
          Open Menu
          <Chevron open={open} size="small" />
        </Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItem>Cut</MenuItem>
          <MenuItem disabled>Edit</MenuItem>
          <MenuItem secondaryContent="Ctrl + V">Paste</MenuItem>
          <MenuItem>Save</MenuItem>
          <MenuItem>Save as</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export default {
  title: 'Components/Menu',
  component: Menu,
};
