import * as React from 'react';
import { Menu, MenuTrigger, MenuList, MenuPopover, MenuItem } from '../index';
import { Button } from '@pongo-ui/react-button';
// import { Header2 } from '@pongoai/react-text';
import { makeStyles, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },
  row: {
    display: 'inline-flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },
});

export const BasicMenuExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Menu>
        <MenuTrigger>
          <Button>Open Settings</Button>
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuItem>asd</MenuItem>
            <MenuItem>asd</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </div>
  );
};

export default {
  title: 'Components/Menu',
  component: Menu,
};
