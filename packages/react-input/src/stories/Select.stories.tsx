import * as React from 'react';
import { Select } from '../index';
import { makeStyles, shorthands } from '@griffel/react';
import { MenuItemRadio } from '@pongo-ui/react-menu';

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

export const BasicSelectExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Select label="test">
        <MenuItemRadio name="font" value="segoe">
          Segoe
        </MenuItemRadio>
        <MenuItemRadio name="font" value="calibri">
          Calibri
        </MenuItemRadio>
        <MenuItemRadio name="font" value="arial">
          Arial
        </MenuItemRadio>
      </Select>
      <Select label="test" contentAfter="test">
        <MenuItemRadio name="font" value="segoe">
          Segoe
        </MenuItemRadio>
        <MenuItemRadio name="font" value="calibri">
          Calibri
        </MenuItemRadio>
        <MenuItemRadio name="font" value="arial">
          Arial
        </MenuItemRadio>
      </Select>
    </div>
  );
};

export default {
  title: 'Components/Select',
  component: Select,
};
