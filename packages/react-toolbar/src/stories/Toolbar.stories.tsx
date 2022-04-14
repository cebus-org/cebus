import * as React from 'react';
import { Toolbar, ToolbarButton } from '../index';
import { Text } from '@cebus/react-text';
import { Avatar } from '@cebus/react-avatar';
import { Menu, MenuTrigger, MenuList, MenuPopover, MenuItem } from '@cebus/react-menu';
import { Stack } from '@cebus/react-layout';

export const BasicToolbarExample = () => {
  return (
    <Toolbar>
      <Text size={500} weight={'bold'}>
        Cebus
      </Text>
      <Stack grow />
      <Avatar name="Caleb Zearing" />
    </Toolbar>
  );
};

export const AppearanceToolbarExample = () => {
  return (
    <Toolbar appearance="subtle">
      <Text size={500} weight={'bold'}>
        Cebus
      </Text>
      <Stack grow />
      <ToolbarButton>Save</ToolbarButton>
      <ToolbarButton>Wiki</ToolbarButton>
      <ToolbarButton>Contact</ToolbarButton>
      <ToolbarButton>
        <Avatar name="Caleb Zearing" />
      </ToolbarButton>
    </Toolbar>
  );
};

export const ToolbarMenuExample = () => {
  return (
    <Toolbar>
      <Text size={500} weight={'bold'}>
        Cebus
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
