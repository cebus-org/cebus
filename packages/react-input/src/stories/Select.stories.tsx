import * as React from 'react';
import { Select } from '../index';
import { makeStyles, shorthands } from '@griffel/react';

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
      <Select />
    </div>
  );
};

export default {
  title: 'Components/Select',
  component: Select,
};
