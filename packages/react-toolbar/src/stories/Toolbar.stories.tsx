import * as React from 'react';
import { Toolbar, ToolbarButton } from '../index';
import { Text } from '@pongo-ui/react-text';
import { Avatar } from '@pongo-ui/react-avatar';
import { Menu, MenuTrigger, MenuList, MenuPopover, MenuItem } from '@pongo-ui/react-menu';
import { Stack } from '@pongo-ui/react-layout';

export const BasicToolbarExample = () => {
  return (
    <Toolbar>
      <Text size={500} weight={'bold'}>
        Pongo
      </Text>
      <Stack grow />
      <Avatar name="Caleb Zearing" />
    </Toolbar>
  );
};

export const ToolbarMenuExample = () => {
  return (
    <Toolbar>
      <Text size={500} weight={'bold'}>
        Pongo
      </Text>
      <Stack grow />
      <ToolbarButton>Save</ToolbarButton>
      <ToolbarButton>Wiki</ToolbarButton>
      <ToolbarButton>Contact</ToolbarButton>
      <Menu>
        <MenuTrigger>
          <ToolbarButton>
            <Avatar name="Caleb Zearing" />
          </ToolbarButton>
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Sign out</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </Toolbar>
  );
};

export default {
  title: 'Components/Toolbar',
  component: Toolbar,
};
