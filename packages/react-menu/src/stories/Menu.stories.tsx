import * as React from 'react';
import { Menu, MenuTrigger, MenuList, MenuPopover, MenuItem, MenuProps } from '../index';
import { Button } from '@pongo-ui/react-button';

export const BasicMenuExample = () => {
  const [open, setOpen] = React.useState(false);
  const onOpenChange: MenuProps['onOpenChange'] = (e, data) => {
    setOpen(data.open);
  };

  return (
    <Menu open={open} onOpenChange={onOpenChange}>
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

export default {
  title: 'Components/Menu',
  component: Menu,
};
