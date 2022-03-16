import * as React from 'react';
import { Toolbar, ToolbarButton } from '../index';
import { Text } from '@pongo-ui/react-text';
import { Avatar } from '@pongo-ui/react-avatar';
import { Menu, MenuTrigger, MenuList, MenuPopover, MenuItem } from '@pongo-ui/react-menu';
import { makeStyles, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },

  growStyles: {
    display: 'flex',
    flexGrow: 1,
  },
});

export const BasicToolbarExample = () => {
  const styles = useStyles();

  return (
    <Toolbar>
      <Text className={styles.growStyles} size={500} weight={'bold'}>
        Pongo
      </Text>
      <Avatar name="Caleb Zearing" />
    </Toolbar>
  );
};

export const ToolbarMenuExample = () => {
  const styles = useStyles();

  return (
    <Toolbar>
      <Text className={styles.growStyles} size={500} weight={'bold'}>
        Pongo
      </Text>
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
