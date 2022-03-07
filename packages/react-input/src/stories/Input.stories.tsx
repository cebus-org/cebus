import * as React from 'react';
import { Input, InputWrapper } from '../index';
import { Button } from '@pongo-ui/react-button';
import { makeStyles, shorthands } from '@griffel/react';
import { tokens } from '@pongo-ui/react-theme';

import { Menu, MenuTrigger, MenuList, MenuPopover, MenuItem, MenuItemRadio } from '@pongo-ui/react-menu';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    ...shorthands.gap('10px'),
  },
});

const FilterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 16C13.9142 16 14.25 16.3358 14.25 16.75C14.25 17.1642 13.9142 17.5 13.5 17.5H10.5C10.0858 17.5 9.75 17.1642 9.75 16.75C9.75 16.3358 10.0858 16 10.5 16H13.5ZM16.5 11C16.9142 11 17.25 11.3358 17.25 11.75C17.25 12.1642 16.9142 12.5 16.5 12.5H7.5C7.08579 12.5 6.75 12.1642 6.75 11.75C6.75 11.3358 7.08579 11 7.5 11H16.5ZM19.5 6C19.9142 6 20.25 6.33579 20.25 6.75C20.25 7.16421 19.9142 7.5 19.5 7.5H4.5C4.08579 7.5 3.75 7.16421 3.75 6.75C3.75 6.33579 4.08579 6 4.5 6H19.5Z" />
  </svg>
);

export const BasicInputExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Input
        appearance="standard"
        className="test"
        placeholder="test"
        contentBefore={<FilterIcon />}
        contentAfter={<FilterIcon />}
        danger
      />
      <div className={styles.row}>
        <Input placeholder="hello" danger size="large" />
        <Menu>
          <MenuTrigger>
            <InputWrapper contentBefore={<FilterIcon />} danger>
              <input
                name="text"
                placeholder="Enter text"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '0px 10px',
                  width: '100%',
                  height: '100%',
                  outlineStyle: 'none',
                }}
              />
            </InputWrapper>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
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

        <Button size="large">Test</Button>
      </div>

      <InputWrapper appearance="filled">
        <input
          name="text"
          placeholder="Enter text"
          style={{
            background: 'none',
            border: 'none',
            padding: '0px 10px',
            width: '100%',
            height: '100%',
            outlineStyle: 'none',
          }}
        />
      </InputWrapper>

      <InputWrapper appearance="filled" danger>
        <input
          name="text"
          placeholder="Enter text"
          style={{
            background: 'none',
            border: 'none',
            padding: '0px 10px',
            width: '100%',
            height: '100%',
            outlineStyle: 'none',
          }}
        />
      </InputWrapper>

      <InputWrapper appearance="standard">
        <input
          name="text"
          placeholder="Enter text"
          style={{
            background: 'none',
            border: 'none',
            padding: '0px 10px',
            width: '100%',
            height: '100%',
            outlineStyle: 'none',
          }}
        />
      </InputWrapper>
    </div>
  );
};

export const InputTypeExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Input type="number" />
      <Input type="time" />
      <Input type="month" />
    </div>
  );
};

export const InputDisabledExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Input defaultValue="hello" disabled />
      <Input defaultValue="hello" appearance="filled" disabled />
      <Input defaultValue="hello" appearance="standard" disabled />
    </div>
  );
};

export default {
  title: 'Components/Input',
  component: Input,
};
